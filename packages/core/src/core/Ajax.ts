import axios, {AxiosError, AxiosResponse} from 'axios';
import {Events} from './Events';

export class Ajax {
    private headers: { [key: string]: string } = {'X-Requested-With': 'XMLHttpRequest'};
    private currentRequests: number = 0;
    public events = new Events(['beforeSend', 'load']);
    public cancel?: () => void;

    constructor(options?: { headers?: { [key: string]: string } }) {
        if (options && options.headers) {
            Object.assign(this.headers, options.headers);
        }
    }

    send<ResponseData = any>(options: {
        data?: any,
        method: 'GET' | 'POST' | 'PATCH' | 'get' | 'post' | 'patch' | 'PUT' | 'put' | 'DELETE' | 'delete',
        headers?: { [key: string]: string },
        url: string,
        onProgress?: (total: number, progress: number) => any,
        response?: any
    }) {
        // TODO why we check here if data === null then reassign to null again?
        if (options.data === null || options.data === undefined || options.data === 'undefined') {
            options.data = null;
        }
        if (!options.method) {
            options.method = 'POST';
        }

        options.headers = options.headers ? Object.assign(options.headers, this.headers, options.headers) : ({...this.headers});

        // eslint-disable-next-line prefer-destructuring
        const CancelToken = axios.CancelToken;
        const cancelSource = CancelToken.source();

        const config = {
            // `url` is the server URL that will be used for the request
            url: options.url,

            // `method` is the request method to be used when making the request
            method: options.method,

            // `headers` are custom headers to be sent
            headers: options.headers,

            // `data` is the data to be sent as the request body
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // When no `transformRequest` is set, must be of one of the following types:
            // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
            // - Browser only: FormData, File, Blob
            // - Node only: Stream, Buffer
            data: options.data,

            // `onUploadProgress` allows handling of progress events for uploads
            onUploadProgress: (progressEvent: ProgressEvent) => {
                if (options.onProgress) {
                    options.onProgress(progressEvent.loaded, progressEvent.total);
                }
            },

            // `cancelToken` specifies a cancel token that can be used to cancel the request
            // (see Cancellation section below for details)
            cancelToken: cancelSource.token,
        };

        this.cancel = cancelSource.cancel;

        const wrapError = (e: any) => {
            e.isSFAjaxError = true; // Marks error that can have normal data inside
            return e;
        };

        const ajaxPromise: Promise<AxiosResponse<ResponseData>> = new Promise(((resolve, reject) => { // Return a new promise.
            if (!options.url) {
                console.error('You should provide url');
                reject(new Error('You should provide url'));
            }
            this.currentRequests += 1;
            axios
                .request(config)
                .then((response: AxiosResponse<ResponseData>) => {
                    this.currentRequests -= 1;

                    if (response.status) {
                        if (response.status > 199 && response.status < 300) { // 200-299
                            resolve(response);
                        } else if (response.status > 399 && response.status < 600) { // 400-599
                            reject(wrapError(response));
                        } else {
                            console.error('unknown status %d. Rejecting', response.status);
                            reject(wrapError(response));
                        }
                    } else {
                        reject(wrapError(response)); // reject with the status text
                    }
                    options.response = response;
                    this.events.trigger('load', options); // for example - used to handle actions
                })
                .catch((error: AxiosError) => {
                    this.currentRequests -= 1;
                    if (error.response) {
                        reject(wrapError(error.response));
                    } else {
                        reject(error);
                    }
                });
        }));

        return ajaxPromise;
    }
}

export default Ajax;

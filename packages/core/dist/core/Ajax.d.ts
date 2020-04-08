import { AxiosResponse } from 'axios';
import { Events } from './Events';
export declare class Ajax {
    private headers;
    private currentRequests;
    events: Events;
    cancel?: () => void;
    constructor(options?: {
        headers?: {
            [key: string]: string;
        };
    });
    send<ResponseData = any>(options: {
        data?: any;
        method: 'GET' | 'POST' | 'PATCH' | 'get' | 'post' | 'patch' | 'PUT' | 'put' | 'DELETE' | 'delete';
        headers?: {
            [key: string]: string;
        };
        url: string;
        onProgress?: (total: number, progress: number) => any;
        response?: any;
    }): Promise<AxiosResponse<ResponseData>>;
}
export default Ajax;

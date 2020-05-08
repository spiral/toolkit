export const formMessagesDefaults = {
  template: '<div class="alert alert-${type} alert-dismissible fade show" role="alert">'
    + '${text}'
    + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
    + '<span aria-hidden="true">&times;</span>'
    + '</button>'
    + '</div>',
  close: '.close',
  place: 'bottom',
  levels: {
    success: 'success',
    message: 'success',
    debug: 'success',
    info: 'info',
    notice: 'info',
    warning: 'warning',
    error: 'danger',
    danger: 'danger',
    critical: 'danger',
    alert: 'danger',
    emergency: 'danger',
  },
  selector: '[data-message]',
  field: '[data-field]',
  fieldElement: '[data-input]',
  fieldTemplate: '<div data-message class="invalid-feedback" data-form-message>${text}</div>',
  fieldPlace: 'bottom',
  fieldClasses: {
    success: 'is-valid', info: 'is-valid', warning: 'is-invalid', error: 'is-invalid',
  },
};

/**
 * @param {Object|String} message
 * @param {String} type
 * @return {Object}
 */
export function prepareMessageObject(message: FreeformMessage, type: string) {
  if (typeof message === 'string') {
    return { text: message, type };
  }
  return {
    text: message.text || message.message,
    type: message.type || type,
  };
}

export type FreeformMessage = {text?: string, message?: string, type?: string} | string;
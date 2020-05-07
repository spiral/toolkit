import Modal from '../components/modal';

const template = (data) => (`
  <div data-sf="modal-content" class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-${data.kind || 'white'}">
        <h4 class="modal-title" id="${data.id}-label">${data.title}</h4>
        <button data-sf="modal-close" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ${data.context}
      </div>
      <div class="modal-footer">
        ${data.cancel ? `<button data-sf="modal-cancel" type="button" class="btn btn-${data.cancel.kind || 'secondary'}">${data.cancel.label || 'Cancel'}</button>` : ''}
        ${data.confirm ? `<button data-sf="modal-confirm" type="button" class="btn btn-${data.confirm.kind || 'primary'}">${data.confirm.label || 'Confirm'}</button>` : ''}
      </div>
    </div>
  </div>`);

const defaultOptions = {
  confirm: {},
  cancel: {},
};

let idCounter = Date.now();

// eslint-disable-next-line import/prefer-default-export
export const confirmModal = async (title, text, options) => {
  const fullOptions = { ...defaultOptions, options };
  // eslint-disable-next-line no-plusplus
  const id = `confirm-modal-${idCounter++}`;
  const div = document.createElement('div');
  div.className = 'modal sf-modal';
  div.setAttribute('data-sf', 'modal');
  div.setAttribute('id', id);
  div.setAttribute('tabindex', '-1');
  div.setAttribute('role', 'dialog');
  div.setAttribute('aria-labelledby', `${id}-label`);
  div.setAttribute('aria-hidden', 'true');
  div.innerHTML = template({
    title,
    context: text,
    ...fullOptions,
  });
  document.body.appendChild(div);
  const modal = Modal.init(div);
  const finish = () => {
    modal.die();
    document.body.removeChild(div);
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.addEventListener('sf:modal-confirm', () => {
        finish();
        resolve();
      });
      div.addEventListener('sf:modal-cancel', () => {
        finish();
        reject();
      });
      modal.open();
    });
  });
};

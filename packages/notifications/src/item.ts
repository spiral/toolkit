export const toastTemplate = `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
         <div class="custom-control custom-checkbox mr-auto">
          <input type="checkbox" class="custom-control-input" id="sf-notification-{{id}}" {{#if selected}}checked="checked"{{/if}}>
          <label class="custom-control-label" for="sf-notification-{{id}}">{{{title}}}</label>
        </div>
        <small>{{date}}</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="toast-body">
        {{{body}}}
    </div>
</div>`;

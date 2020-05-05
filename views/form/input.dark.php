<extends:toolkit:form.field/>

<block:element>
    @if(injected('add-reset') || injected('add-icon'))
    <div class="input-group">
        @endif
        @if(injected('add-icon'))
        <div class="input-group-prepend" title="${icon-label}">
            <span class="form-control text-muted bg-white border-right-0">
                <i class="fas fa-${add-icon}"></i>
            </span>
        </div>
        @endif
        <input
                id="${id}"
                data-input="true"
                class="form-control @if(injected('add-icon')) @endif @if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
                type="${type|text}"
                name="${name}"
                placeholder="${placeholder}"
                value="${value}${context}"
                @if(inject('disabled'))disabled @endif
        />
        @if(injected('add-reset'))
        <div class="input-group-append">
            <button class="btn btn-secondary" type="reset">&times;</button>
        </div>
        @endif
        @if(injected('add-reset') || injected('add-icon'))
    </div>
    @endif
</block:element>

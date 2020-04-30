<extends:toolkit:form.field/>

<block:element>
    @if(injected('add-reset'))
    <div class="input-group">
        @endif
        <input
                id="${id}"
                data-input="true"
                class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
                type="${type|text}"
                name="${name}"
                placeholder="${placeholder}"
                value="${value}${context}"
                @if(inject('disabled'))disabled@endif
        />
        @if(injected('add-reset'))
        <button class="btn btn-secondary" type="reset">&times;</button>
    </div>
    @endif
</block:element>

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
        inputID:consume
        id="${id}"
        data-input="true"
        class="form-control @if(injected('add-icon')) @endif @if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif@if(injected('class')) ${class}@endif"
        type="${type|text}"
        name="${name}"
        placeholder="${placeholder}"
        value="${value}${context}"
        @if(injected('maxlength'))
          maxlength="${maxlength}"
        @endif
        @if(injected('minlength'))
          minlength="${minlength}"
        @endif
        @if(injected('pattern'))
          pattern="${pattern}"
        @endif
        @if(injected('readonly'))
          readonly
        @endif
        @if(injected('autocomplete'))
          autocomplete="${autocomplete}"
        @endif
        @if(injected('spellcheck'))
          spellcheck="${spellcheck}"
        @endif
        @if(injected('disabled'))disabled @endif
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

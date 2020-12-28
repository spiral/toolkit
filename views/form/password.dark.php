<extends:toolkit:form.field/>

<block:element>
    <div class="input-group">
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
                class="form-control @if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif@if(injected('class')) ${class}@endif"
                type="${type|password}"
                name="${name}"
                placeholder="${placeholder}"
                value="${value}${context}"
                @if(injected('disabled'))disabled @endif
        />
        <div style="cursor: pointer" class="input-group-append" title="${icon-label}" onclick="var p = this.parentNode.querySelector('input'); var s = this.querySelector('i'); if(p.type==='password') { p.type = 'text';s.classList.remove('fa-eye');s.classList.add('fa-eye-slash'); } else { p.type = 'password'; s.classList.remove('fa-eye-slash');s.classList.add('fa-eye');} ">
         <span class="form-control text-muted bg-white">
           <i class="fas fa-eye"></i>
         </span>
        </div>
    </div>
</block:element>

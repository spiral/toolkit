<extends path="toolkit:form/field"/>

<block:element>
    <select inputID:consume
            id="${id}"
            data-input="true"
            class="form-control@if(inject('error')) is-invalid@endif @if(inject('success')) is-valid@endif ${class}"
            attr:aggregate="exclude:path,context"
    >
        @if(inject('placeholder'))
            <option>${placeholder}</option>
        @endif
        @foreach(inject('values', []) as $_k_ => $_v_)
            <option value="{{ $_k_ }}" @if($_k_ == inject('value'))selected@endif>{{ $_v_ }}</option>
        @endforeach
    </select>
</block:element>

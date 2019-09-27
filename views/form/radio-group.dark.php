<div class="form-group col-${col|12} ${field-class}" data-field="true" attr:aggregate="prefix:field-">
    <div class="form-row">
        @foreach(inject('values', []) as $_k_ => $_v_)
            <div class="col col-auto">
                <div class="@if(inject('is-native'))form-check@else custom-control custom-radio@endif">
                    <input
                            id="{{ $_id_ = md5(__LINE__ .'-'. $_k_) }}"
                            type="radio"
                            name="${name}"
                            class="@if(inject('is-native'))form-check-input@else custom-control-input@endif @if(inject('error')) is-invalid@endif @if(inject('success')) is-valid@endif ${class}"
                            value="{{ $_k_ }}"
                            @if($_k_ == inject('value'))checked@endif
                            attr:aggregate="include:disabled"
                    >
                    <label for="{{ $_id_ }}"
                           class="@if(inject('is-native'))form-check-label@else custom-control-label@endif ${label-class}"
                           attr:aggregate="exclude:path,context"
                    >{{ $_v_ }}</label>
                </div>
            </div>
        @endforeach
    </div>
</div>

<button
  data-url="${url}"
  @if(injected('method')) data-method="${method}" @endif
  data-data='${data}'
  @if(injected('template')) data-template="${template}" @endif
  @if(injected('template-name')) data-template-name="${template-name}" @endif
  @if(injected('lock-type')) data-lock-type="${lock-type|none}" @endif
  data-before-submit="${before-submit}"
  data-after-submit="${after-submit}"
  class="js-sf-action ${class}"
  attr:aggregate
>
  ${context}
</button>
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

/*
 * github.com/serbanghita/FormToObject.js 1.0.1  (c) 2013 Serban Ghita <serbanghita@gmail.com>
 * @licence MIT
 */
// Constructor.

const FormToObject = function (formRef) {
  if (!formRef) {
    return false;
  }

  this.formRef = formRef;
  // eslint-disable-next-line no-useless-escape
  this.keyRegex = /[^\[\]]+/g;
  this.$form = null;
  this.$formElements = [];
  this.formObj = {};

  if (!this.setForm()) {
    return false;
  }
  if (!this.setFormElements()) {
    return false;
  }

  return this.setFormObj();
};

// Set the main form object we are working on.
FormToObject.prototype.setForm = function () {
  switch (typeof this.formRef) {
    case 'string':
      this.$form = document.getElementById(this.formRef);
      break;

    case 'object':
      if (this.isDomNode(this.formRef)) {
        this.$form = this.formRef;
      }
      break;

    default:
  }

  return this.$form;
};

// Set the elements we need to parse.
FormToObject.prototype.setFormElements = function () {
  this.$formElements = this.$form.querySelectorAll('input, textarea, select');
  return this.$formElements.length;
};

// Check to see if the object is a HTML node.
FormToObject.prototype.isDomNode = function (node) {
  return typeof node === 'object' && 'nodeType' in node && node.nodeType === 1;
};

// Iteration through arrays and objects. Compatible with IE.
FormToObject.prototype.forEach = function (arr, callback) {
  if ([].forEach) {
    [].forEach.call(arr, callback);
    return;
  }

  // let i;
  // for (i in arr) {
  Object.keys(arr).forEach((i) => {
    // Object.prototype.hasOwnProperty instead of arr.hasOwnProperty for IE8 compatibility.
    if (Object.prototype.hasOwnProperty.call(arr, i)) {
      callback.call(arr, arr[i]);
    }
  });
};

// Recursive method that adds keys and values of the corresponding fields.
FormToObject.prototype.addChild = function (result, domNode, keys, value) {
  // #1 - Single dimensional array.
  if (keys.length === 1) {
    // We're only interested in the radio that is checked.
    if (domNode.nodeName === 'INPUT' && domNode.type === 'radio') {
      if (domNode.checked) {
        result[keys] = value;
        return;
      }
      return;
    }

    // Checkboxes are a special case. We have to grab each checked values
    // and put them into an array.
    if (domNode.nodeName === 'INPUT' && domNode.type === 'checkbox') {
      if (domNode.checked) {
        if (value) { // Looks like checkbox array
          if (!result[keys]) {
            result[keys] = [];
          }
          result[keys].push(value);
        } else {
          result[keys] = true; // Single checkbox
        }
        return;
      }
      return;
    }

    // Multiple select is a special case.
    // We have to grab each selected option and put them into an array.
    if (domNode.nodeName === 'SELECT' && domNode.type === 'select-multiple') {
      result[keys] = [];
      const DOMchilds = domNode.querySelectorAll('option[selected]');
      if (DOMchilds) {
        this.forEach(DOMchilds, (child) => {
          result[keys].push(child.value);
        });
      }
      return;
    }

    // Fallback. The default one to one assign.
    result[keys] = value;
  }

  // #2 - Multi dimensional array.
  if (keys.length > 1) {
    if (!result[keys[0]]) {
      result[keys[0]] = {};
    }

    this.addChild(result[keys[0]], domNode, keys.splice(1, keys.length), value);
  }

  // return result; // ?
};

FormToObject.prototype.setFormObj = function () {
  let test;
  let i = 0;

  for (i = 0; i < this.$formElements.length; i += 1) {
    // Ignore the element if the 'name' attribute is empty.
    // Ignore the 'disabled' elements.
    if (this.$formElements[i].name && !this.$formElements[i].disabled) {
      test = this.$formElements[i].name.match(this.keyRegex);
      this.addChild(this.formObj, this.$formElements[i], test, this.$formElements[i].value);
    }
  }

  return this.formObj;
};

module.exports = FormToObject;

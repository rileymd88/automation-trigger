import { getBlends } from './services/backend'

var component = {
  label: 'Item type',
  component: 'expression-with-dropdown',
  dropdownOnly: true,
  type: 'string',
  ref: 'component',
  defaultValue: '',
  options: [
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'dropdown', label: 'Dropdown' },
    { value: 'dropdownMultiple', label: 'Dropdown multiple select' },
    { value: 'numberInput', label: 'Number' },
    { value: 'slider', label: 'Slider' },
    { value: 'switch', label: 'Switch' },
    { value: 'textInput', label: 'Text' },
  ]
}

var width = {
  type: "number",
  component: "slider",
  label: "Width",
  ref: "width",
  min: 10,
  max: 100,
  step: 1,
  defaultValue: 100
}

var label = {
  type: 'string',
  ref: 'label',
  label: 'Label',
  defaultValue: 'Label',
  expression: 'optional'
}

var step = {
  type: 'number',
  ref: 'step',
  label: 'Step',
  defaultValue: 1,
  expression: 'optional',
  show: function (item) {
    if (item.component === 'slider') { return true; }
  }
}

var min = {
  type: 'number',
  ref: 'min',
  label: 'Min',
  defaultValue: 0,
  expression: 'optional',
  show: function (item) {
    if (item.component === 'slider') { return true; }
  }
}

var max = {
  type: 'number',
  ref: 'max',
  label: 'Max',
  defaultValue: 10,
  expression: 'optional',
  show: function (item) {
    if (item.component === 'slider') { return true; }
  }
}

var dropdownOptions = {
  type: 'string',
  ref: 'dropdownOptions',
  label: 'Dropdown values',
  defaultValue: '',
  expression: 'optional',
  show: function (item) {
    if (item.component === 'dropdown' || item.component === 'dropdownMultiple') { return true; }
  }
}

var explainDropdown = {
  label: `Enter dropdown values using a comma as a seperator`,
  component: 'text',
  show: function (item) {
    if (item.component === 'dropdown' || item.component === 'dropdownMultiple') { return true; }
  }
}

var ref = {
  type: 'string',
  ref: 'ref',
  label: 'Reference',
  defaultValue: function() {
    return Math.random().toString(36).substr(2, 5);
  },
  expression: 'optional'
}

var explainRef = {
  label: `The reference is used as a key when sending the data to your blend`,
  component: 'text'
}

var required = {
  ref: 'required',
  type: 'boolean',
  component: 'switch',
  translation: 'Required input',
  options: [
    {
      value: true,
      translation: 'properties.on',
    },
    {
      value: false,
      translation: 'properties.off',
    },
  ],
  defaultValue: false
}

var alignment = {
  component: 'item-selection-list',
  type: 'string',
  ref: 'alignment',
  translation: 'properties.Alignment',
  horizontal: true,
  defaultValue: 'left',
  items: [
    {
      component: 'icon-item',
      icon: 'align_left',
      value: 'left',
      translation: 'properties.dock.left',
      labelPlacement: 'bottom',
    },
    {
      component: 'icon-item',
      icon: 'align_center',
      value: 'center',
      translation: 'Common.Center',
      labelPlacement: 'bottom',
    },
    {
      component: 'icon-item',
      icon: 'align_right',
      value: 'right',
      translation: 'properties.dock.right',
      labelPlacement: 'bottom',
    },
  ],
}

var config = {
  type: "items",
  label: "Form",
  component: "items",
  items: {
    objects: {
      ref: "itemsList",
      label: "Items",
      type: "items",
      items: {
        objects: {
          type: 'array',
          ref: 'items',
          label: 'Items',
          itemTitleRef: function (item) {
            return item.ref;
          },
          allowAdd: true,
          allowRemove: true,
          allowMove: true,
          addTranslation: 'Add items',
          items: {
            component: component,
            step: step,
            min: min,
            max: max,
            dropdownOptions: dropdownOptions,
            explainDropdown: explainDropdown,
            width: width,
            alignment: alignment,
            label: label,
            ref: ref,
            explainRef: explainRef,
            required: required
          }
        }
      }
    }
  }
};

var blends = {
  label: 'Blends',
  component: 'expression-with-dropdown',
  dropdownOnly: true,
  type: 'string',
  ref: 'blend',
  defaultValue: '',
  options: function() {
    return getBlends()
  }
}

var blend = {
  type: "items",
  label: "Blend",
  component: "items",
  items: {
    blends: blends
  }
}  

export default {
  definition: {
    type: 'items',
    component: 'accordion',
    items: {
      config: config,
      blend: blend,
      settings: {
        uses: 'settings',
      },
    },
  },
  support: {
    export: true,
    exportData: true,
    snapshot: true,
    viewData: true,
  },
};

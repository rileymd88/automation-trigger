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

const types = {
  checkbox: 'boolean',
  dropdown: 'string'
}

const stringComponents = ['dropdown','dropdownMultiple', 'textInput']
const numberComponents = ['numberInput', 'slider', 'switch', 'checkbox']
const booleanComponents = ['switch', 'checkbox']

var defaultValueString = {
  type: 'string',
  ref: 'defaultValueString',
  label: 'Default value',
  defaultValue: '',
  expression: 'optional',
  show: function(item) {
    return stringComponents.includes(item.component)
  }
}

var defaultValueNumber = {
  type: 'number',
  ref: 'defaultValueNumber',
  label: 'Default value',
  defaultValue: 1,
  expression: 'optional',
  show: function(item) {
    return numberComponents.includes(item.component)
  }
}

/* var defaultValueBoolean = {
  type: 'boolean',
  component: 'switch',
  ref: 'defaultValueBoolean',
  label: 'Default value',
  defaultValue: false,
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
  show: function(item) {
    return booleanComponents.includes(item.component)
  }
} */

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
  defaultValue: false,
  show: function(item) {
    if(item.component !== 'switch' && item.component !== 'checkbox') {
      return true
    }
    else {
      return false
    }
}
}

var alignment = {
  component: 'item-selection-list',
  type: 'string',
  ref: 'alignment',
  translation: 'properties.Alignment',
  horizontal: true,
  defaultValue: 'flex-start',
  items: [
    {
      component: 'icon-item',
      icon: 'align_left',
      value: 'flex-start',
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
      value: 'flex-end',
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
            return `${item.component} ${item.ref}`;
          },
          allowAdd: true,
          allowRemove: true,
          allowMove: true,
          addTranslation: 'Add items',
          items: {
            component: component,
            defaultValueString: defaultValueString,
            defaultValueNumber: defaultValueNumber,
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
  label: 'Select a blend',
  component: 'expression-with-dropdown',
  dropdownOnly: true,
  type: 'string',
  ref: 'blend.id',
  defaultValue: '',
  options: function() {
    return getBlends()
  }
}

var buttonLabel = {
  type: 'string',
  ref: 'blend.buttonLabel',
  label: 'Button label',
  defaultValue: 'Run blend',
  expression: 'optional'
}

var runningBlendLabel = {
  type: 'string',
  ref: 'blend.runningBlendLabel',
  label: 'Button loading message',
  defaultValue: 'Running blend...',
  expression: 'optional'
}

var buttonWidth = {
  type: "number",
  component: "slider",
  label: "Button width",
  ref: "blend.buttonWidth",
  min: 10,
  max: 100,
  step: 1,
  defaultValue: 100
}

var buttonAlignment = {
  component: 'item-selection-list',
  type: 'string',
  ref: 'blend.alignment',
  translation: 'properties.Alignment',
  horizontal: true,
  defaultValue: 'flex-start',
  items: [
    {
      component: 'icon-item',
      icon: 'align_left',
      value: 'flex-start',
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
      value: 'flex-end',
      translation: 'properties.dock.right',
      labelPlacement: 'bottom',
    },
  ],
}

var useCondition = {
  type: 'boolean',
  component: 'switch',
  translation: 'Condition to enable blend',
  ref: 'blend.useEnabledCondition',
  defaultValue: false,
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
}

var condition = {
  ref: 'blend.enabledCondition',
  translation: 'properties.enableCondition',
  type: 'integer',
  expression: 'optional',
  show: (data) => data.blend.useEnabledCondition,
}

var blend = {
  type: "items",
  label: "Blend",
  component: "items",
  items: {
    blends: blends,
    useCondition: useCondition,
    condition: condition
  }
}

var general = {
  type: 'items',
  translation: 'properties.general',
  items: {
    showTitles: {},
    details: {
      show: false,
    },
    label: {
      component: 'string',
      ref: 'style.label',
      translation: 'Common.Label',
      expression: 'optional',
    },
  },
}

var variant = {
  label: 'Variant type',
  component: 'dropdown',
  type: 'string',
  ref: 'blendGlobalTheme.variant',
  defaultValue: 'standard',
  options: [
    { value: 'filled', label: 'Filled' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'standard', label: 'Standard' },
  ]
}

var colorPickerPrimary = {
  component: 'color-picker',
  type: 'object',
  ref: 'blendGlobalTheme.primaryColor',
  translation: 'Primary color',
  dualOutput: true,
  defaultValue: {
    color: "#009845",
    index: "-1"
  }
}

var colorPickerSecondary = {
  component: 'color-picker',
  type: 'object',
  ref: 'blendGlobalTheme.secondaryColor',
  translation: 'Secondary color',
  dualOutput: true,
  defaultValue: {
    color: "#757575",
    index: "-1"
  }
}

var theme = {
  grouped: true,
  type: 'items',
  translation: 'Theme',
  items: {
    colorPickerPrimary: colorPickerPrimary,
    colorPickerSecondary: colorPickerSecondary,
    variant: variant
  }
}

var button = {
  grouped: true,
  type: 'items',
  translation: 'Button',
  items: {
    buttonLabel: buttonLabel,
    runningBlendLabel: runningBlendLabel,
    buttonWidth: buttonWidth,
    buttonAlignment: buttonAlignment,
  }
}

var dialogShow = {
  ref: 'blendDialog.show',
  type: 'boolean',
  component: 'switch',
  translation: 'Use dialog',
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

var dialogWidth = {
  label: 'Dialog width',
  component: 'expression-with-dropdown',
  dropdownOnly: true,
  type: 'string',
  ref: 'blendDialog.width',
  defaultValue: '',
  options: [
    { value: 'xs', label: 'Extra small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra large' },
  ],
  show: function(item) {
    return item.blendDialog.show
  }
}

var dialogTitle = {
  type: 'string',
  ref: 'blendDialog.title',
  label: 'Dialog title',
  defaultValue: 'Dialog title',
  expression: 'optional',
  show: function(item) {
    return item.blendDialog.show
  }
}

var dialog = {
  grouped: true,
  type: 'items',
  translation: 'Dialog',
  items: {
    dialogShow: dialogShow,
    dialogWidth: dialogWidth,
    dialogTitle: dialogTitle
  }
}

export default {
  definition: {
    type: 'items',
    component: 'accordion',
    items: {
      dimensions: {
        uses: "dimensions",
        min: 0,
        max: 20
      },
      measures: {
        uses: "measures",
        min: 0,
        max: 20
      },
      config: config,
      blend: blend,
      settings: {
        uses: 'settings',
        items: {
          general: general,
          button: button,
          dialog: dialog,
          theme: theme
        }
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

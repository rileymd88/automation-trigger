import { getBlends } from './services/backend'
import luiIcons from './utils/lui-icons';
import blendr from './services/blendr'

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

const stringComponents = ['dropdown', 'dropdownMultiple', 'textInput']
const numberComponents = ['numberInput', 'slider', 'switch', 'checkbox']
const booleanComponents = ['switch', 'checkbox']

var defaultValueString = {
  type: 'string',
  ref: 'defaultValueString',
  label: 'Default value',
  defaultValue: '',
  expression: 'optional',
  show: function (item) {
    return stringComponents.includes(item.component)
  }
}

var defaultValueNumber = {
  type: 'number',
  ref: 'defaultValueNumber',
  label: 'Default value',
  defaultValue: 1,
  expression: 'optional',
  show: function (item) {
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
  defaultValue: function () {
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
  show: function (item) {
    if (item.component !== 'switch' && item.component !== 'checkbox') {
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
  options: function () {
    return getBlends()
  },
  show: function () {
    return blendr.useApis
  }
}

var blendUrl = {
  type: 'string',
  ref: 'blend.id',
  label: 'Blendr POST webhook URL',
  defaultValue: '',
  expression: 'optional',
  show: function () {
    return !blendr.useApis
  }
}

var blendExecutionToken = {
  type: 'string',
  ref: 'blend.executionToken',
  label: 'Blendr execution token',
  defaultValue: '',
  expression: 'optional',
  show: function () {
    return !blendr.useApis
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
  label: 'Loading message',
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
  defaultValue: 100,
  show: function (item) {
    return !item.blendDialog.show && !item.blend.buttonWidthAuto
  }
}

var buttonAlignment = {
  component: 'item-selection-list',
  type: 'string',
  ref: 'blend.alignment',
  translation: 'properties.Alignment',
  horizontal: true,
  defaultValue: 'center',
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
  show: function (item) {
    return !item.blendDialog.show
  }
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
    blendUrl: blendUrl,
    blendExecutionToken: blendExecutionToken,
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

var buttonUseIcon = {
  ref: 'blend.icon.useIcon',
  type: 'boolean',
  translation: 'properties.icon.use',
  component: 'switch',
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
}

var buttonIconType = {
  ref: 'blend.icon.iconType',
  component: 'expression-with-dropdown',
  translation: 'Icon',
  defaultValue: '',
  options: luiIcons,
  expressionType: 'StringExpression',
  show: function (data) {
    return data.blend.icon.useIcon
  }
}
var buttonIconPosition = {
  ref: 'blend.icon.position',
  component: 'dropdown',
  translation: 'Common.Position',
  options: [
    {
      translation: 'properties.dock.left',
      value: 'left',
    },
    {
      translation: 'properties.dock.right',
      value: 'right',
    },
  ],
  show: function (data) {
    return data.blend.icon.useIcon
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
  defaultValue: 'md',
  options: [
    { value: 'xs', label: 'Extra small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra large' },
  ],
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogTitle = {
  type: 'string',
  ref: 'blendDialog.title',
  label: 'Dialog title',
  defaultValue: 'Dialog title',
  expression: 'optional',
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogButtonLabel = {
  type: 'string',
  ref: 'blendDialog.buttonLabel',
  label: 'Button label',
  defaultValue: 'Open dialog',
  expression: 'optional',
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogUseIcon = {
  ref: 'blendDialog.icon.useIcon',
  type: 'boolean',
  translation: 'properties.icon.use',
  component: 'switch',
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
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogIconType = {
  ref: 'blendDialog.icon.iconType',
  component: 'expression-with-dropdown',
  translation: 'Icon',
  defaultValue: '',
  options: luiIcons,
  expressionType: 'StringExpression',
  show: function (item) {
    return item.blendDialog.show && item.blendDialog.icon.useIcon
  }
}
var dialogIconPosition = {
  ref: 'blendDialog.icon.position',
  component: 'dropdown',
  translation: 'Common.Position',
  options: [
    {
      translation: 'properties.dock.left',
      value: 'left',
    },
    {
      translation: 'properties.dock.right',
      value: 'right',
    },
  ],
  show: function (item) {
    return item.blendDialog.show && item.blendDialog.icon.useIcon
  }
}

var dialogAlignment = {
  component: 'item-selection-list',
  type: 'string',
  ref: 'blendDialog.alignment',
  translation: 'properties.Alignment',
  horizontal: true,
  defaultValue: 'center',
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
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogButtonWidthAuto = {
  ref: 'blendDialog.buttonWidthAuto',
  type: 'boolean',
  translation: 'Auto button width',
  component: 'switch',
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
  defaultValue: true,
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogButtonWidth = {
  type: "number",
  component: "slider",
  label: "Button width",
  ref: "blendDialog.buttonWidth",
  min: 10,
  max: 100,
  step: 1,
  defaultValue: 100,
  show: function (item) {
    return item.blendDialog.show && !item.blendDialog.buttonWidthAuto
  }
}

var dialogButtonHeightAuto = {
  ref: 'blendDialog.buttonHeightAuto',
  type: 'boolean',
  translation: 'Auto button height',
  component: 'switch',
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
  defaultValue: true,
  show: function (item) {
    return item.blendDialog.show
  }
}

var dialogButtonHeight = {
  type: "number",
  component: "slider",
  label: "Button height",
  ref: "blendDialog.buttonHeight",
  min: 10,
  max: 100,
  step: 1,
  defaultValue: 100,
  show: function (item) {
    return !item.blendDialog.buttonHeightAuto && item.blendDialog.show
  }
}

var dialog = {
  grouped: true,
  type: 'items',
  translation: 'Dialog',
  items: {
    dialogShow: dialogShow,
    dialogButtonLabel: dialogButtonLabel,
    dialogButtonHeightAuto: dialogButtonHeightAuto,
    dialogButtonHeight: dialogButtonHeight,
    dialogButtonWidthAuto: dialogButtonWidthAuto,
    dialogButtonWidth: dialogButtonWidth,
    dialogAlignment: dialogAlignment,
    dialogUseIcon: dialogUseIcon,
    dialogIconType: dialogIconType,
    dialogIconPosition: dialogIconPosition,
    dialogTitle: dialogTitle,
    dialogWidth: dialogWidth,
  }
}



var successMessageShow = {
  ref: 'blend.showSuccessMsg',
  type: 'boolean',
  translation: 'Show notification',
  component: 'switch',
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
  defaultValue: true,
}

var successMessageShowOutput = {
  ref: 'blend.showSuccessMsgOutput',
  type: 'boolean',
  translation: 'Show Blendr output',
  component: 'switch',
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
  defaultValue: true,
  show: function (item) {
    return item.blend.showSuccessMsg
  }
}

var customSuccessMsg = {
  type: 'string',
  ref: 'blend.customSuccessMsg',
  label: 'Success message',
  defaultValue: 'Blend run successfully!',
  expression: 'optional',
  show: function (item) {
    return item.blend.showSuccessMsg && !item.blend.showSuccessMsgOutput
  }
}

var customErrorMsg = {
  type: 'string',
  ref: 'blend.customErrorMsg',
  label: 'Error message',
  defaultValue: 'There was an error running your blend',
  expression: 'optional',
  show: function (item) {
    return item.blend.showSuccessMsg && !item.blend.showSuccessMsgOutput
  }
}

var notification = {
  grouped: true,
  type: 'items',
  translation: 'Notification',
  items: {
    successMessageShow: successMessageShow,
    successMessageShowOutput: successMessageShowOutput,
    customSuccessMsg: customSuccessMsg,
    customErrorMsg: customErrorMsg
  }
}

var buttonHeightAuto = {
  ref: 'blend.buttonHeightAuto',
  type: 'boolean',
  translation: 'Auto button height',
  component: 'switch',
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
  defaultValue: true,
  show: function (item) {
    return !item.blendDialog.show && item.items.length === 0
  }
}

var buttonHeight = {
  type: "number",
  component: "slider",
  label: "Button height",
  ref: "blend.buttonHeight",
  min: 10,
  max: 100,
  step: 1,
  defaultValue: 100,
  show: function (item) {
    return !item.blend.buttonHeightAuto && !item.blendDialog.show && item.items.length === 0
  }
}

var buttonWidthAuto = {
  ref: 'blend.buttonWidthAuto',
  type: 'boolean',
  translation: 'Auto button width',
  component: 'switch',
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
  defaultValue: true,
  show: function (item) {
    return !item.blendDialog.show && item.items.length === 0
  }
}



var button = {
  grouped: true,
  type: 'items',
  translation: 'Run blend button',
  items: {
    buttonLabel: buttonLabel,
    runningBlendLabel: runningBlendLabel,
    buttonHeightAuto: buttonHeightAuto,
    buttonHeight: buttonHeight,
    buttonWidthAuto: buttonWidthAuto,
    buttonWidth: buttonWidth,
    buttonAlignment: buttonAlignment,
    buttonUseIcon: buttonUseIcon,
    buttonIconType: buttonIconType,
    buttonIconPosition: buttonIconPosition
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
          notification: notification,
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

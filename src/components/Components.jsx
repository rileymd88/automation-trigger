import React from "react";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import CustomCheckbox from "./CustomCheckbox";
import DropdownMultiple from "./DropdownMultiple"
import Dropdown from "./Dropdown"
import CustomSwitch from "./CustomSwitch"
import CustomSlider from "./CustomSlider";
import CustomButton from "./CustomButton";
import CustomDatePicker from "./CustomDatePicker";

const Components = {
  textInput: TextInput,
  numberInput: NumberInput,
  checkbox: CustomCheckbox,
  dropdown: Dropdown,
  dropdownMultiple: DropdownMultiple,
  switch: CustomSwitch,
  slider: CustomSlider,
  button: CustomButton,
  datePicker: CustomDatePicker
};

export default (block, blendGlobalTheme, blend) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block.id,
      block: block,
      blendGlobalTheme: blendGlobalTheme,
      blend: blend
    });
  }
}
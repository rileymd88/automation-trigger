import React from "react";
import { Select } from '@qlik/sprout-react';
import { getControlStyle, normalizeOptions, useItemValue } from './component-utils';

export default function Dropdown({ block }) {
  const options = normalizeOptions(block.dropdownOptions);
  const [value, setValue] = useItemValue(block.ref, block.defaultValueString || '');

  return (
    <div style={getControlStyle(block)}>
      <Select.Select
        label={block.label}
        onChange={(event) => setValue(event.target.value)}
        placeholder={block.label}
        value={value}
      >
        {options.map((option) => (
          <Select.Option key={option} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select.Select>
    </div>
  );
}

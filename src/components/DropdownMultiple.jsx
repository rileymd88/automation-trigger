import React from "react";
import { Select } from '@qlik/sprout-react';
import { getControlStyle, normalizeOptions, useItemValue } from './component-utils';

export default function DropdownMultiple({ block }) {
  const options = normalizeOptions(block.dropdownOptions);
  const defaultValue = React.useMemo(() => normalizeOptions(block.defaultValueString), [block.defaultValueString]);
  const [value, setValue] = useItemValue(block.ref, defaultValue);

  return (
    <div style={getControlStyle(block)}>
      <Select.Multi
        label={block.label}
        onChange={(event) => setValue(Array.from(event.target.selectedOptions || []).map((option) => option.value))}
        placeholder={block.label}
        value={Array.isArray(value) ? value : []}
      >
        {options.map((option) => (
          <Select.Option key={option} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select.Multi>
    </div>
  );
}

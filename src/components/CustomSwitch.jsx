import React from 'react';
import { Switch } from '@qlik/sprout-react';
import { getControlStyle, useItemValue } from './component-utils';

export default function CustomSwitch({ block }) {
  const defaultValue = block.defaultValueNumber === 1;
  const [value, setValue] = useItemValue(block.ref, defaultValue);

  return (
    <div style={getControlStyle(block)}>
      <Switch
        checked={!!value}
        label={block.label}
        onChange={(event) => setValue(event.target.checked)}
      />
    </div>
  );
}

import React from 'react';
import { TextField } from '@qlik/sprout-react';
import { getControlStyle, useItemValue } from './component-utils';

export default function NumberInput({ block }) {
  const [value, setValue] = useItemValue(block.ref, block.defaultValueNumber);

  return (
    <div style={getControlStyle(block)}>
      <TextField
        label={block.label}
        onChange={(event) => setValue(event.target.value)}
        type="number"
        value={value}
      />
    </div>
  );
}

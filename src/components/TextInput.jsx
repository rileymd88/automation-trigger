import React from 'react';
import { Textarea } from '@qlik/sprout-react';
import { getControlStyle, useItemValue } from './component-utils';

export default function TextInput({ block }) {
  const [value, setValue] = useItemValue(block.ref, block.defaultValueString || '');

  return (
    <div style={getControlStyle(block)}>
      <Textarea
        label={block.label}
        onChange={(event) => setValue(event.target.value)}
        resizable="vertical"
        value={value}
      />
    </div>
  );
}

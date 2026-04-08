import React from 'react';
import { Slider } from '@qlik/sprout-react';
import { getControlStyle, useItemValue } from './component-utils';

export default function CustomSlider({ block }) {
  const [value, setValue] = useItemValue(block.ref, block.defaultValueNumber);

  return (
    <div style={getControlStyle(block)}>
      <Slider.Single
        label={block.label}
        max={block.max}
        min={block.min}
        onChange={(nextValue) => setValue(nextValue)}
        step={block.step}
        value={Number(value)}
      />
    </div>
  );
}

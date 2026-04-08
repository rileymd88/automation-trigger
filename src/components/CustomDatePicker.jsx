import React from 'react';
import { TextField } from '@qlik/sprout-react';
import { formatDateForInput, getControlStyle, parseDateInputValue, useItemValue } from './component-utils';

const convertNumberDate = (numberData) => {
  const hours = Math.floor((numberData % 1) * 24);
  const minutes = Math.floor((((numberData % 1) * 24) - hours) * 60)
  return new Date(Date.UTC(0, 0, numberData, hours - 17, minutes));
}

export default function CustomDatePicker({ block }) {
  const defaultDate = React.useMemo(() => convertNumberDate(block.defaultValueDate), [block.defaultValueDate]);
  const [date, setDate] = useItemValue(block.ref, defaultDate);

  return (
    <div style={getControlStyle(block)}>
      <TextField
        label={block.label}
        onChange={(event) => setDate(parseDateInputValue(event.target.value))}
        type="date"
        value={formatDateForInput(date)}
      />
    </div>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem, setItem } from '../states/formsSlice';

export function useItemValue(ref, defaultValue) {
  const dispatch = useDispatch();
  const storedValue = useSelector((state) => selectItem(state, ref));

  React.useEffect(() => {
    if (storedValue === 'undefined') {
      dispatch(setItem({
        ref,
        data: defaultValue,
      }));
    }
  }, [defaultValue, dispatch, ref, storedValue]);

  const setValue = React.useCallback((nextValue) => {
    dispatch(setItem({
      ref,
      data: nextValue,
    }));
  }, [dispatch, ref]);

  return [storedValue === 'undefined' ? defaultValue : storedValue, setValue];
}

export function getControlStyle(block) {
  return {
    width: `${block.width}%`,
    marginBottom: 12,
    alignSelf: block.alignment || 'flex-start',
  };
}

export function getButtonDimension(auto, value) {
  return auto ? 'auto' : `${value}%`;
}

export function getButtonStyle(alignment, width, height) {
  return {
    alignSelf: alignment || 'flex-start',
    width,
    height,
  };
}

export function getButtonBrandStyle(blendGlobalTheme) {
  const primaryColor = blendGlobalTheme?.primaryColor?.color;
  const fontColor = blendGlobalTheme?.fontColor?.color;

  if (!primaryColor) {
    return undefined;
  }

  return {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
    color: fontColor,
  };
}

export function normalizeOptions(optionString) {
  if (!optionString || typeof optionString !== 'string') {
    return [];
  }

  return optionString
    .split(',')
    .map((option) => option.trim())
    .filter((option) => option.length > 0);
}

export function formatDateForInput(value) {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
    return '';
  }

  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function parseDateInputValue(value) {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split('-').map(Number);

  if ([year, month, day].some((part) => Number.isNaN(part))) {
    return null;
  }

  return new Date(year, month - 1, day);
}

export function mapDialogWidth(width) {
  const widthMap = {
    xs: 's',
    sm: 'm',
    md: 'l',
    lg: 'xl',
    xl: 'xxl',
  };

  return widthMap[width] || 'l';
}

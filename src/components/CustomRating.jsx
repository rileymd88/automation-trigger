import React from 'react';
import { Field } from '@qlik/sprout-react';
import { FavoriteIcon, FavoritedIcon } from '@qlik/sprout-icons/react';
import { getControlStyle, useItemValue } from './component-utils';

const ratingSizeMap = {
  small: 16,
  medium: 20,
  large: 24,
};

function getRatingButtonStyle() {
  return {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'inline-flex',
    alignItems: 'center',
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getSafePrecision(precision) {
  const numericPrecision = Number(precision);

  if (!Number.isFinite(numericPrecision) || numericPrecision <= 0) {
    return 1;
  }

  return clamp(numericPrecision, 0.1, 1);
}

function roundToPrecision(value, precision) {
  const steps = Math.round(value / precision);

  return Number((steps * precision).toFixed(10));
}

function Star({ fill, size }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        position: 'relative',
        width: size,
        height: size,
      }}
    >
      <FavoriteIcon
        height={size}
        style={{ color: 'var(--sprout-common-text-color-weak, #98a2b3)' }}
        width={size}
      />
      <span
        style={{
          position: 'absolute',
          inset: 0,
          width: `${fill * 100}%`,
          overflow: 'hidden',
        }}
      >
        <FavoritedIcon
          height={size}
          style={{ color: 'var(--sprout-warning-color-default, #f59e0b)' }}
          width={size}
        />
      </span>
    </span>
  );
}

export default function CustomRating({ block }) {
  const [value, setValue] = useItemValue(block.ref, block.defaultValueNumber);
  const maxRating = Math.max(1, Math.round(Number(block.maxRating) || 5));
  const precision = getSafePrecision(block.precision);
  const numericValue = clamp(Number(value) || 0, 0, maxRating);
  const iconSize = ratingSizeMap[block.ratingSize] || ratingSizeMap.medium;

  const setRating = React.useCallback((nextValue) => {
    setValue(clamp(roundToPrecision(nextValue, precision), 0, maxRating));
  }, [maxRating, precision, setValue]);

  const onRatingKeyDown = React.useCallback((event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      setRating(numericValue + precision);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      setRating(numericValue - precision);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      setRating(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      setRating(maxRating);
    }
  }, [maxRating, numericValue, precision, setRating]);

  const onStarClick = React.useCallback((event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const rawRatio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 1;
    const relativeRatio = clamp(rawRatio, 0, 1);
    const steppedRatio = Math.max(precision, Math.ceil(relativeRatio / precision) * precision);

    setRating(index + steppedRatio);
  }, [precision, setRating]);

  return (
    <div style={getControlStyle(block)}>
      <Field label={block.label}>
        <div
          aria-label={block.label}
          aria-valuemax={maxRating}
          aria-valuemin={0}
          aria-valuenow={numericValue}
          aria-valuetext={`${numericValue} of ${maxRating}`}
          onKeyDown={onRatingKeyDown}
          role="slider"
          style={{ display: 'inline-flex', gap: 8, outline: 'none' }}
          tabIndex={0}
        >
          {Array.from({ length: maxRating }, (_, index) => {
            const fill = clamp(numericValue - index, 0, 1);

            return (
              <button
                key={index + 1}
                aria-label={`${index + 1} stars`}
                onClick={(event) => onStarClick(event, index)}
                style={getRatingButtonStyle()}
                tabIndex={-1}
                type="button"
              >
                <Star fill={fill} size={iconSize} />
              </button>
            );
          })}
        </div>
      </Field>
    </div>
  );
}

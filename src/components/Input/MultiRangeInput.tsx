/* eslint-disable no-param-reassign */
import type { ChangeEvent, FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  onChange: Function;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  minVal,
  maxVal,
  onChange,
}) => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const parent = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    setWidth(parent.current!.parentElement!.offsetWidth);
  }, []);

  const widthPixel = `w-[${width}px]`;

  return (
    <div ref={parent}>
      <div
        className={`${minVal === min ? 'not-active-thumb' : 'active-thumb'}`}
      >
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            // setMinVal(value);
            event.target.value = value.toString();
            onChange({ min: value, max: maxVal });
          }}
          className={`
          ${minVal > max - 0.1 * max ? 'z-50' : 'z-30'}
        `}
          style={{ width: `${width}px` }}
        />
      </div>

      <div
        className={`${maxVal === max ? 'not-active-thumb' : 'active-thumb'}`}
      >
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            // setMaxVal(value);
            event.target.value = value.toString();
            onChange({ min: minVal, max: value });
          }}
          className={`z-40`}
          style={{ width: `${width}px` }}
        />
      </div>

      <div className={`${widthPixel} relative`}>
        <div className="absolute z-10 h-2 w-full rounded-full bg-gray-200" />
        <div
          ref={range}
          className={`absolute h-[6px] rounded-full ${
            minVal === min && maxVal === max ? 'bg-gray-200' : 'bg-blueOcare/25'
          }  z-20`}
        />
      </div>
    </div>
  );
};

export default MultiRangeSlider;

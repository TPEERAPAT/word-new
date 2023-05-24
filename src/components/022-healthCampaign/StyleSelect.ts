import type { StylesConfig } from 'react-select';

import type { RectSelectOption } from '#types/Campaign';

export const StyleSelect: StylesConfig<RectSelectOption> = {
  clearIndicator: (base) => ({
    ...base,
    cursor: 'pointer',
    ':hover': {
      color: 'red',
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '14px',
    color: '#8e8e93',
    fontWeight: '400',
  }),
  multiValueLabel: (base) => ({
    ...base,
    backgroundColor: 'white',
    color: 'black',
    borderLeft: '1px solid #D1D1D6',
    borderTop: '1px solid #D1D1D6',
    borderBottom: '1px solid #D1D1D6',
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    boxShadow: 'none',
    borderColor: '#D1D1D6',
    borderRadius: '8px',
    '&:hover': {
      borderColor: '#364B73',
      boxShadow: 'none',
    },
    '&:active': {
      borderColor: '#364B73',
      boxShadow: 'none',
    },
  }),
  multiValueRemove: (base) => ({
    ...base,
    borderRight: '1px solid #D1D1D6',
    borderTop: '1px solid #D1D1D6',
    borderBottom: '1px solid #D1D1D6',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'red',
      cursor: 'pointer',
    },
  }),
};

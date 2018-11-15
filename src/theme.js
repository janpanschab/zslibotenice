// @flow

import { css } from 'styled-components';

const color = {
  blue: '#369',
  white: '#fff',
  black: '#333',
  green: '#92b14f',
  greenLight: '#c0dd8b',
  greenLighter: '#e2f2c7',
};

const sizes = {
  md: 768,
  lg: 1024,
};

const mq = Object.entries(sizes).reduce((acc, [label, size]) => {
  acc[label] = {};
  acc[label].min = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)};
    }
  `;
  acc[label].max = (...args) => css`
    @media (max-width: ${size - 1}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default {
  color,
  mq,
};

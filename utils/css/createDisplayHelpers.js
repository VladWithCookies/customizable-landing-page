import { css } from 'styled-components';

const createDisplayHelpers = (breakpoints) => {
  let styles = '';

  Object.keys(breakpoints).forEach(name => (
    styles += `
      .d-none-${name} {
        @media (min-width: ${breakpoints[name]}) {
          display: none;
        }
      }

      .d-block-${name} {
        display: none;

        @media (min-width: ${breakpoints[name]}) {
          display: block;
        }
      }
    `
  ));

  return css`${styles}`;
};

export default createDisplayHelpers;

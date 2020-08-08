import { css } from 'styled-components';

const createSpacingHelpers = () => {
  let styles = '';

  const sides = ['top', 'bottom', 'right', 'left'];
  const spaceAmounts = [0, 30, 40, 55, 95];

  spaceAmounts.forEach(space => (
    sides.forEach(side => (
      styles += `
        .m${side.slice(0, 1)}-${space} {
          margin-${side}: ${space}px;
        }

        .p${side.slice(0, 1)}-${space} {
          padding-${side}: ${space}px;
        }
      `
    ))
  ));

  return css`${styles}`;
};

export default createSpacingHelpers;

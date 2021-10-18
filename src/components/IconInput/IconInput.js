import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderWidth: 1,
    iconSize: 16,
    fontSize: 14,
    height: 24,
  },
  large: {
    borderWidth: 2,
    iconSize: 24,
    fontSize: 18,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  if (!styles) throw Error('Size not found');

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputWrapper
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--border-width': styles.borderWidth + 'px',
          '--font-size': styles.fontSize + 'px',
        }}
      />
      <IconWrapper
        style={{
          '--size': styles.iconSize + 'px',
        }}
      >
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--height);
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
`;

export default IconInput;

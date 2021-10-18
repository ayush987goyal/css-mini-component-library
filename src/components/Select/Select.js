import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
// import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <StyledIcon id="chevron-down" size={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  padding: 12px 52px 12px 16px;
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: inherit;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default Select;

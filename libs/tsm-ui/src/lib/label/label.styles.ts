import styled from 'styled-components';

interface StyledLabelProps {
  wrap: boolean;
}

export const StyledLabel = styled.div<StyledLabelProps>`
  white-space: ${(props) => (props.wrap ? 'normal' : 'nowrap')};
  width: 150px;
  text-overflow: ellipsis;
  overflow: ${(props) => (props.wrap ? 'visible' : 'hidden')};
`;

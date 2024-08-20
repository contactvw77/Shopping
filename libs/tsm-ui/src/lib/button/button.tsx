// import styled from 'styled-components';

// const StyledButton = styled.div`
//   color: pink;
// `;

// export function Button() {
//   return (
//     <StyledButton>
//       <h1>Welcome to Button!</h1>
//     </StyledButton>
//   );
// }

// export default Button;

import React from 'react';
import { StyledButton } from './button.styles';

interface ButtonProps {
  label: string;
  color: string;
}

const $Button: React.FC<ButtonProps> = ({ label, color }) => {
  return (
    <div>
      <StyledButton color={color}>{label}</StyledButton>
    </div>
  );
};

export default $Button;

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

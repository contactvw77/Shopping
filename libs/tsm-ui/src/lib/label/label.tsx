import { StyledLabel } from './label.styles';
import React from 'react';

interface LabelProps {
  label: string;
  wrap: boolean;
}

const $Label: React.FC<LabelProps> = ({ label, wrap }) => {
  return <StyledLabel wrap={wrap}>{label} </StyledLabel>;
};

export default $Label;

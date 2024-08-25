import { StyledImage } from './image.styles';
import React from 'react';

interface ImageProps {
  shape: string;
  size: string;
  alt: string;
  src: string;
}

const $Image: React.FC<ImageProps> = ({ shape, size, alt, src }) => {
  return (
    <div>
      <StyledImage src={src} alt={alt} shape={shape} size={size} />
    </div>
  );
};

export default $Image;

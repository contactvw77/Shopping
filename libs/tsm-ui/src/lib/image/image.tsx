import { StyledImage } from './image.styles';
import React from 'react';

interface ImageProps {
  shape: string;
  size: string;
  alt: string;
}

const $Image: React.FC<ImageProps> = ({ shape, size, alt }) => {
  return (
    <div>
      <StyledImage
        src="https://picsum.photos/seed/picsum/200/300"
        alt={alt}
        shape={shape}
        size={size}
      />
    </div>
  );
};

export default $Image;

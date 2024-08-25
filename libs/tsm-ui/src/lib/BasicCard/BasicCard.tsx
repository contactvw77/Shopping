import $Image from '../image/image';
import $Label from '../label/label';
import React from 'react';

interface BasicCard {
  shape: string;
  size: string;
  alt: string;
  src: string;
  label: string;
  wrap: boolean;
}

const BasicCard: React.FC<BasicCard> = ({
  shape,
  size,
  alt,
  src,
  label,
  wrap,
}) => {
  return (
    <div>
      <$Image shape={shape} size={size} alt={alt} src={src} />
      <$Label label={label} wrap={wrap} />
    </div>
  );
};

export default BasicCard;

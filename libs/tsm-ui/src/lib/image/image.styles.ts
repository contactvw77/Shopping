import styled from 'styled-components';

interface StyledImageProps {
  shape: string;
  size: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  border-radius: ${(props) => (props.shape === 'round' ? '50%' : '0%')};
  width: ${(props) =>
    props.size === 'xs'
      ? '35px'
      : props.size === 'sm'
      ? '55px'
      : props.size === 'md'
      ? '110px'
      : props.size === 'lg'
      ? '200px'
      : props.size === 'xl'
      ? '350px'
      : props.size === '2xl'
      ? '500px'
      : '35px'};
  height: ${(props) =>
    props.size === 'xs'
      ? '35px'
      : props.size === 'sm'
      ? '55px'
      : props.size === 'md'
      ? '110px'
      : props.size === 'lg'
      ? '200px'
      : props.size === 'xl'
      ? '350px'
      : props.size === '2xl'
      ? '500px'
      : '35px'};
`;

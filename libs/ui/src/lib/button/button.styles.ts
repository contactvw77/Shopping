import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color === 'primary'
      ? '#59b5f7'
      : props.color === 'success'
      ? '#68ba7f'
      : props.color === 'warnings'
      ? '#f58700'
      : props.color === 'danger'
      ? '#ff7081'
      : props.color === 'neutral'
      ? '#d3d3d3'
      : ''};
  color: ${(props) =>
    props.color === 'primary'
      ? '#000000'
      : props.color === 'success'
      ? '#000000'
      : props.color === 'warnings'
      ? '#000000'
      : props.color === 'danger'
      ? '#000000'
      : props.color === 'neutral'
      ? '#000000'
      : ''};
  width: 125px;
  border: 0;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: ${(props) =>
      props.color === 'primary'
        ? '#305cde'
        : props.color === 'success'
        ? '#2e6f40'
        : props.color === 'warnings'
        ? '#c76e00'
        : props.color === 'danger'
        ? '#c11c84'
        : props.color === 'neutral'
        ? '#878787'
        : ''};
  }
`;

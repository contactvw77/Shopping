import styled from 'styled-components';
import { Button } from '@mui/base/Button';
import './mui-button.styles.css';

const StyledMuiButton = styled.div`
  color: pink;
`;

export function MuiButton() {
  // return (
  //   <StyledMuiButton>
  //     <h1>Welcome to MuiButton!</h1>
  //   </StyledMuiButton>
  // );
  return <Button className="btn">I am MUI Button</Button>;
}

export default MuiButton;

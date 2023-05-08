import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 10px;
  background-color: royalblue;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;

  transition: all 400ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: rgb(95, 131, 238);
    scale: 1.1;
  }
`;

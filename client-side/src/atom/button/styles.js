import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 4px;

  transition: all 400ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.8);
    scale: 1.1;
  }
`;

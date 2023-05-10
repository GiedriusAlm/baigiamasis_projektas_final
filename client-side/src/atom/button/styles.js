import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 10px;
  background-color: ${(props) => props.theme.palette.form.light};
  border: none;
  color: ${(props) => props.theme.palette.default.light};
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: all 400ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.palette.form.main};
    scale: 1.1;
  }
`;

import styled from 'styled-components';

export const StyledForm = styled.div`
  .form__wrapper {
    display: flex;
    justify-content: center;
  }

  .error-message {
    color: ${(props) => props.theme.palette.error.message};
    font-size: 12px;
    margin-bottom: 10px;
    padding-bottom: 20px;
  }

  .form__wrapper form {
    border-radius: 8px;
    padding: 2rem 2rem;
    background-color: ${(props) => props.theme.palette.form.dark};
    border: 1px solid ${(props) => props.theme.palette.form.main};
    box-shadow: ${(props) => props.theme.palette.form.light} 0px 2px 8px 0px;
    width: 300px;
  }

  form > input {
    padding: 10px;
    width: 100%;
    color: ${(props) => props.theme.palette.default.main};
    margin-bottom: 10px;
    border-radius: 8px;
    margin-top: 8px;
    outline: none;
    box-shadow: ${(props) => props.theme.palette.form.main} 0px 2px 8px 0px;
    border: none;
    background-color: transparent;
  }

  input::placeholder {
    text-align: center;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.palette.placeholder.main};
  }

  input:focus::placeholder {
    color: ${(props) => props.theme.palette.placeholder.light};
  }

  .btn-wrapper {
    text-align: center;
  }

  .btn-submit {
    width: 50%;
    padding: 8px 2px;
    background-color: ${(props) => props.theme.palette.submit.main};
    border: none;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 4px;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    transition: all 300ms ease-in-out;
    cursor: pointer;
  }

  .btn-submit:hover {
    background-color: ${(props) => props.theme.palette.form.main};
  }
`;

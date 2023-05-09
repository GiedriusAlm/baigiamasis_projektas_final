import styled from 'styled-components';

export const StyledForm = styled.div`
  .form__wrapper {
    display: flex;
    justify-content: center;
  }

  .form__wrapper form {
    border-radius: 8px;
    padding: 2rem 2rem;
    background-image: linear-gradient(to right, #232526 0%, #414345 100%);
    width: 300px;
  }

  form > input {
    padding: 10px;
    width: 100%;
    color: rgba(255, 255, 255, 0.925);
    margin-bottom: 10px;
    border-radius: 8px;
    outline: none;
    box-shadow: rgba(255, 255, 255, 0.288) 0px 2px 8px 0px;
    border: none;
    background-color: transparent;
  }

  input::placeholder {
    text-align: center;
    letter-spacing: 0.5px;
  }

  input:focus::placeholder {
    color: rgba(255, 255, 255, 0.925);
  }

  .btn-wrapper {
    text-align: center;
  }

  .btn-submit {
    width: 50%;
    padding: 8px 2px;
    background-color: rgba(255, 255, 255, 0.158);
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
    background-color: rgba(95, 131, 238, 0.329);
  }

  @media (min-width: 768px) {
    .form__wrapper form {
      width: 500px;
    }

    form input[name='Name'] {
      float: left;
      width: 49%;
    }

    form input[name='Surname'] {
      float: right;
      width: 49%;
    }
    form input[name='Email'] {
      float: left;
      width: 49%;
    }

    form input[name='Age'] {
      float: right;
      width: 49%;
    }
  }
`;

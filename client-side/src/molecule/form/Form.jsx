import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm } from './styles';

const Form = ({ setData, onClose }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check for errors
      const errors = {};
      if (name === '') {
        errors.name = 'Name is required';
      }
      if (surname === '') {
        errors.surname = 'Surname is required';
      }
      if (email === '') {
        errors.email = 'Email is required';
      }
      if (age === '') {
        errors.age = 'Age is required';
      } else if (isNaN(Number(age))) {
        errors.age = 'Age must be a number';
      }
      setFormErrors(errors);

      if (Object.keys(errors).length > 0) {
        return;
      }

      // If no errors, submit form
      await axios.post('/api/customers', {
        name: name,
        surname: surname,
        email: email,
        age: age,
      });

      setName('');
      setSurname('');
      setEmail('');
      setAge('');

      onClose();

      const response = await axios.get('/api/customers');
      setData(response.data);
    } catch (error) {
      console.log('Error submitting customer' + error);
    }
  };

  return (
    <StyledForm>
      <div className='form__wrapper'>
        <form onSubmit={handleSubmit}>
          {formErrors.name && <span className='error-message error-name'>{formErrors.name}</span>}
          <input
            name='Name'
            type='text'
            placeholder='Enter name...'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={formErrors.name ? 'has-error' : ''}
          />
          {formErrors.surname && <span className='error-message error-surname'>{formErrors.surname}</span>}
          <input
            name='Surname'
            type='text'
            placeholder='Enter surname...'
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            className={formErrors.surname ? 'has-error' : ''}
          />
          {formErrors.email && <span className='error-message error-email'>{formErrors.email}</span>}
          <input
            name='Email'
            type='email'
            placeholder='Enter email...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={formErrors.email ? 'has-error' : ''}
          />
          {formErrors.age && <span className='error-message error-age'>{formErrors.age}</span>}
          <input
            name='Age'
            type='text'
            placeholder='Enter age...'
            value={age}
            a
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className={formErrors.age ? 'has-error' : ''}
          />

          <div className='btn-wrapper'>
            <button className='btn-submit'>SUBMIT</button>
          </div>
        </form>
      </div>
    </StyledForm>
  );
};

export default Form;

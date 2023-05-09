import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm } from './styles';

function Form({ setData, onClose }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };

  return (
    <StyledForm>
      <div className='form__wrapper'>
        <form onSubmit={handleSubmit}>
          <input
            name='Name'
            type='text'
            placeholder='Enter name...'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            name='Surname'
            type='text'
            placeholder='Enter surname...'
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />

          <input
            name='Email'
            type='email'
            placeholder='Enter email...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            name='Age'
            type='text'
            placeholder='Enter age...'
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <div className='btn-wrapper'>
            <button className='btn-submit'>SUBMIT</button>
          </div>
        </form>
      </div>
    </StyledForm>
  );
}

export default Form;
// test

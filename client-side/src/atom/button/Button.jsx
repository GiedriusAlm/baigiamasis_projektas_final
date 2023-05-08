// import { useState } from 'react';
import { StyledButton } from './styles';
// import Modal from '../../molecule/modal';

const Button = ({ action }) => {
  return <StyledButton onClick={action}>Add New</StyledButton>;
};

export default Button;

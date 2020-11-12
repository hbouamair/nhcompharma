import React, { useState } from 'react';
import './Form4.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import img1 from '../../../../assets/phar.jpg'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container4'>
       
        <div className='form-content-left'>
          <img className='form-img' src={img1} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
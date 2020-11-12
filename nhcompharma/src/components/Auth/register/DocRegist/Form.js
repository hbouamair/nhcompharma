import React, { useState } from 'react';
import './Form1.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import img2 from '../../../../assets/Doc.png';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container1'>
       
        <div className='form-content-left'>
          <img className='form-img' src={img2} alt='spaceship' />
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
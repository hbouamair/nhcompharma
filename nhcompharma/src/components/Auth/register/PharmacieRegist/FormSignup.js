import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form4.css';
import { Link } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Register Now 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Nom </label>
          <input
            className='form-input'
            type='text'
            name='Nom'
            placeholder='Entre le nom de pharmacien'
           
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
        <label className='form-label'>Adresse </label>
        <input
          className='form-input'
          type='text'
          name='Adresse'
          placeholder='Enter l adresse de la pharmacie   '
          
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className='form-inputs'>
      <label className='form-label'>ICE</label>
      <input
        className='form-input'
        type='text'
        name='ICE'
        placeholder='Enter votre ICE '
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}
    </div>
    <div className='form-inputs'>
    <label className='form-label'>Numero de Tele / Fax</label>
    <input
      className='form-input'
      type='text'
      name='Tele'
      placeholder='Enter votre Numero de Tele '
      
      onChange={handleChange}
    />
    {errors.username && <p>{errors.username}</p>}
  </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
       
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <Link to="/login"> <a href='#'>here</a></Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
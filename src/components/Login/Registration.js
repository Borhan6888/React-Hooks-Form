import React from 'react';
import { useForm } from 'react-hook-form';
import '../../App.css';

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        name: data.name,
        password: data.password,
      })
    );
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} />
        <input type="email" {...register('email', { required: true })} />
        {errors.email && (
          <span style={{ color: 'red' }}>*Email* is mandatory </span>
        )}
        <input type="password" {...register('password')} />
        <input type={'submit'} style={{ backgroundColor: '#a1eafb' }} />
      </form>
    </>
  );
}
export default Registration;

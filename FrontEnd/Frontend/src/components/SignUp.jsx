import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="input input-bordered text-black w-full mt-1"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="input input-bordered w-full mt-1 text-black"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="input input-bordered text-black w-full mt-1"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div>
            <button type="submit" className="btn bg-pink-500 text-white hover:bg-pink-700 hover:text-white btn-primary w-full">
              Sign Up
            </button>
            <p className='py-2'> Already Registered? <Link to="/Courses" className='underline text-blue-500 cursor-pointer'>SignIn</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

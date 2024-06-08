import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LogIn({ isOpen, onClose }) {
  const{
    register, 
    handleSubmit,
    formState:{errors},

  }= useForm();
  
  if (!isOpen) return null;

  return (
    <div
      id="my_modal_5"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div className="bg-white dark:bg-slate-900 dark:text-white p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              required
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 " htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 text-black rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900">
            Log In
          </button>
          <p className='py-2'>Not Registered? <Link to="/SignUp" className='underline text-blue-500 cursor-pointer'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;

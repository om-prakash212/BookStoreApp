import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import CoursesPG from './Courses/CoursesPG'
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'><Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Courses' element={<CoursesPG/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes></div>
    </>
  );
}

export default App

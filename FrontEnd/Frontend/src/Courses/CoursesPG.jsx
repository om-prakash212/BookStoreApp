import React from 'react'
import NavBar from '../components/NavBar'
import Courses from '../components/Courses'
import Footer from '../components/Footer'
import list from "../../public/list.json"

function CoursesPG() {
   
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'><Courses/></div>
    <Footer/>
    </>
  )
}

export default CoursesPG

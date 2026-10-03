import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Landing Page</h1>
      <Link to="/searchbar"><button className='home-btn'>SearchBar</button></Link>
      <Link to="/profile"><button className='home-btn'>Profile</button></Link>
      <Link to="/calc"><button className='home-btn'>Calc</button></Link>
      <Link to="/autosave"><button className='home-btn'>Autosave</button></Link>
      <Link to="/otp"><button className='home-btn'>OTP</button></Link>
      <Link to="/attendance"><button className='home-btn'>Attendance</button></Link>
      <Link to="/timer"><button className='home-btn'>Timer</button></Link>
      <Link to="/fetch"><button className='home-btn'>Fetch</button></Link>
      <Link to="/wikipedia"><button className='home-btn'>Wikipedia Search</button></Link>
    </div>
  )
}

export default Home
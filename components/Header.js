import React, { useState } from 'react'

export default function Header({user}) {

  const [display, setDisplay] = useState(false); 

  const dropDown = () => {
    setDisplay(!display); 
  }

  return (
    <div>

      <div className='header-container'>
          <div className='nav-container'>
            <div className='worldAndHome'>
              <a href='/' className='earth'><i className='fa-solid fa-earth-americas fa-2x'></i></a>
              <a href='/' className='navLink navHome'>Home</a>
            </div>
            <a href='/about' className='navLink'>About</a>
            <a href='/contact' className='navLink'>Contact</a>
          </div>
          <div className='profile-container'>
              <a href='/about'><img className='profile-image' src={user.avatarURL} alt="Profile" /></a>
              <a href='/about' className='navImg'><p>{user.firstName}</p></a>
          </div>
      </div>

      <div className='mobile-container'>
        <a href='/' className='earth-mobile'><i className='fa-solid fa-earth-americas fa-2x'></i> <strong className='mobileNavPop'>Popular Cities</strong></a>
        <i className={ (display) ?'fa-solid fa-ellipsis-vertical fa-2x' :'fa-solid fa-ellipsis fa-2x'} onClick={dropDown}></i>
      </div>
      
      <div className={ (display) ?'dropDownMenu' :'displayNone'}>
      <div className='mobileProfileDiv'>
          <a href='/about'><img className='profile-image' src={user.avatarURL} alt="Profile" /></a>
          <a href='/about' className='navImg'><p>{user.firstName}</p></a>
      </div>
      <div className='mobileNavLinks'>
        <a href='/' className='navLink navHome' onClick={()=>{
          setDisplay(!display); 
        }}>Home</a>
        <a href='/about' className='navLink' onClick={()=>{
          setDisplay(!display); 
        }}>About</a>
        <a href='/contact' className='navLink' onClick={()=>{
          setDisplay(!display); 
        }}>Contact</a>
      </div>
      </div>

    </div>
  )
}
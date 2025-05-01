import React from 'react'
import z from './Profile.module.css'
import RegionSelector from '../russianSities/RegionSelector'
import PhoneInput from '../PhoneForm/PhoneForm'
const ProfileMain = () => {
  return (
    <div className={z.main}>
    <div className={z.leftPart}>
    <div className={z.buttons}>

  <button className={z.cab}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  </button>


  <button className={z.yourProjects}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z" 
        stroke="currentColor"
        strokeWidth="2"
      />
      <path 
        d="M7 7H17M7 11H17M7 15H14" 
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
</div>
      
    </div>
    <div className={z.rightPart}>
      <div className={z.topRight}>
      <PhoneInput/>
      <RegionSelector/>
      </div>
      </div>
    </div>
  )
}

export default ProfileMain
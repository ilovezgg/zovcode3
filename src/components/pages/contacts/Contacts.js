import React from 'react'
import Header from '../home/header/Header'
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import PhoneInput from '../home/callUs/PhoneInput'
export const Contacts = () => {
  return (
    <div>
         <Buttons />
         <PhoneInput/>
         <Header />
         <Footer />
    </div>
  )
}
export default Contacts;
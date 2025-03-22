import React from 'react'
import Header from '../home/header/Header'
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import MainContacts from './contacts/MainContacts'
import Faq2 from './FaqPage/Faq2'
export const Contacts = () => {
  return (
    <div>
         <Buttons />
         <MainContacts />
         <Faq2/>
         <Footer />
    </div>
  )
}
export default Contacts;
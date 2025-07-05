import React from 'react'
import Footer from '../home/footer/Footer'
import Buttons2 from '../home/header/Buttons2'
import MainContacts from './contacts/MainContacts'
import Faq2 from './FaqPage/Faq2'
export const Contacts = () => {
  return (
    <div>
         <Buttons2 />
         <MainContacts />
         <Faq2/>
         <Footer />
    </div>
  )
}
export default Contacts;
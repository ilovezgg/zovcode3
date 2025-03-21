import React from 'react'
import Header from '../home/header/Header'
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import MainContacts from './contacts/MainContacts'
import Faq from './faq/Faq'
export const Contacts = () => {
  return (
    <div>
         <Buttons />
         <MainContacts />
         <Faq/>
         <Footer />
    </div>
  )
}
export default Contacts;
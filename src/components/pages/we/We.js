import React from 'react'
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import Cards  from './cards/Cards'
import Textwe from './textWe/Textwe'
const We = () => {
  return (
    <div>
       <Buttons />
       <Textwe /> 
       <Cards />
      <Footer />
    </div>
  )
}

export default We;
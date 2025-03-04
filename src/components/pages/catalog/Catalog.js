import React from 'react'
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import CatalogMain from './homes/CatalogMain'
export const Catalog = () => {
  return (
    <div>
         <Buttons />
         <CatalogMain/>
         <Footer />
    </div>
  )
}
export default Catalog;
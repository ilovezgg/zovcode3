import React from 'react'
import Buttons2 from '../../../../home/header/Buttons2'
import Footer from '../../../../home/footer/Footer'
import EcoHouseMain from './ecoHouseMain/EcoHouseMain'
import EcoHouseFirstText from './ecoHouseFirstText/EcoHouseFirstText'
import EcoHouseInfo from './ecoHouse/ecoHouseInfo/EcoHouseInfo'
import EcoHouseWood from './ecoHouse/ecoHouseWood/EcoHouseWood'
import EcoHouseTables from './ecoHouse/ecoHouseTables/EcoHouseTables'
const EcoHouse = () => {
  return (
    <div>
<Buttons2/>
<EcoHouseMain/>
<EcoHouseFirstText/>
<EcoHouseInfo/>
<EcoHouseWood/>
<EcoHouseTables/>
<Footer/>
    </div>
  )
}

export default EcoHouse
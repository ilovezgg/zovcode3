import React from 'react'
import z from './EcoHouseMain.module.css'
const EcoHouseMain = () => {
  return (
    <section className={z.section}>
      <div className={z.container}>
        <div className={z.hero}>
          <div className={z.heroBg} />
          <div className={z.heroContent}>
            <h1 className={z.heroTitle}>Экологичность сруба: здоровье и комфорт</h1>
            <p className={z.heroSubtitle}>Как натуральная древесина влияет на микроклимат в доме</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default EcoHouseMain
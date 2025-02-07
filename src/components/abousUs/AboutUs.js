import React from 'react'
import z from './AboutUs.module.css'
const AboutUs = () => {
  return (
    <div>
      <div className={z.aboutUsMain}>
        <div className={z.container}>
            <div className={z.textAbout}>
            Мы воплощаем ваши мечты о идеальном доме, внимательно прислушиваясь к каждому пожеланию, чтобы создать жилье, сочетающее в себе красоту, комфорт и долговечность. Будь то роскошный особняк или уютный коттедж, мы готовы стать вашим надежным партнером.

Наши проекты отличаются безупречным качеством, соответствующим самым высоким стандартам, и при этом остаются доступными по цене.


            </div>
            <div className={z.pic}></div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs

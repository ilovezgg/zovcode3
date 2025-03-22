import React from 'react'
import z from './Faq2.module.css'
import Accordion from '../faq/Accordion'
const Faq2 = () => {
  return (
    <div>
        <div className={z.faqMain}>
         <div className={z.containerFor}>
         <Accordion
        question="Работаете ли с материнским капиталом?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="Сколько длится процесс усадки сруба?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="Как производится оплата при заказе дома или бани?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="За сколько в среднем строится сруб?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="Какой брус используется для постройки?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="Какой крепёж используется при сборке сруба из бруса?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="Какое время года лучше выбрать для постройки сруба?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
       <Accordion
        question="Каков срок эксплуатации дома из профилированного бруса?"
        answer="React — это библиотека JavaScript для создания пользовательских интерфейсов."
      />
         </div>
        </div>
    </div>
  )
}

export default Faq2
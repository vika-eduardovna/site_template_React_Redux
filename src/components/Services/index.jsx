import React from 'react'
import s from './style.module.css'
import ServiceCard from '../ServiceCard'
import AddServiceCard from '../AddServiceCard'
import { useSelector } from 'react-redux'

export default function Services() {
  const state = useSelector(state => state.services);
  
  return (
    <section className={s.services}>
      <div className={['wrapper', s.wrapper].join(' ')}>
        <p className='subheader'>Our services</p>
        <h2>We specialize in</h2>
        <div className={s.cards_container}>
          {
            state.map(el => <ServiceCard key={el.id} {...el} />)
          }
          <AddServiceCard />
          
        </div>
      </div>
    </section>
  )
 
}

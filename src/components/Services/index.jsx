import React from 'react'
import s from './style.module.css'
import { data } from './data'
import ServiceCard from '../ServiceCard'

export default function Services() {
  return (
    <section className={s.services}>
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className='subheader'>Our services</p>
            <h2>We specialize in</h2>
            <div className={s.cards_container}>
                {
                    data.map(el => <ServiceCard key={el.id} {...el}/>)
                }
            </div>
        </div>
    </section>
  )
}

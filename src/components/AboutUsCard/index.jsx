import React from 'react'
import s from './style.module.css'
import Button from '../UI/Button'


export default function AboutUsCard({ value, title}) {
  return (
    <div className={s.card_item}>
      <p className={s.value}>{value}</p>
      <p className={s.title}>{title}</p>
      <Button type='light_mode'>
        Learn more
      </Button>
    </div>
  )
}

import React from 'react'
import s from './style.module.css'
import Button from '../UI/Button'

export default function ServiceCard({ title, img }) {

  const cardStyle = {
    backgroundImage: `url('https://premierbusinessclub.com/wp-content/uploads/2020/06/Business-Accounting-Services.jpg')`,
    backgroundposition: 'center',
    backgroundSize: 'cover'
  }

  return (
    <div className={s.card_item} style={cardStyle}>
      {title}
      <Button>Learn more</Button>
    </div>
  )
}

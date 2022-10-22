import React from 'react'
import s from './style.module.css'

export default function MainSection() {
  return (
    <div className={s.container}>
      <img src="https://smapse.ru/storage/2022/02/london-2.jpeg" alt="photo" />
      <div className={['wrapper', s.wrapper].join(' ')}>
        <h1>Accounting services in London</h1>
        <button>Our presentation</button>
      </div>
    </div>
  )
}

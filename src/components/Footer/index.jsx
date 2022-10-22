import React from 'react'
import s from './style.module.css'

export default function Footer() {
  return (
    <footer className={['wrapper', s.footer].join(' ')}>
        <p>2019(c) All rights reserved. Buh.com</p>
        <p>Created by: Buh.com</p>
    </footer>
  )
}

import React from 'react'
import logo from './media/buh_one_logo.png'
import s from './style.module.css'
import Button from '../UI/Button'
import {MenuOutlined} from "@ant-design/icons"

export default function NavBar() {
  return (
    <nav>
        <div className={['wrapper', s.wrapper].join(' ')}>
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
        <ul className={s.menu}>
            <li>Home</li>
            <li>Servises</li>
            <li>Cases</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <Button>Contact us</Button>
        <MenuOutlined className={s.burger_menu}/>
        </div>
        
    </nav>
  )
}

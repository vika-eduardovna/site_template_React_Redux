import React from 'react'
import s from './style.module.css'
import { MailOutlined } from '@ant-design/icons'


export default function Contacts() {
  return (
    <section className={s.contacts}>
      <div className={['wrapper', s.all_blocks].join(' ')}>
        
        <div className={s.info_block}>
          <h2>Contact us</h2>
          <p>Interested? Write us - we will answer as soon as possible!</p>
          
          <div className={s.main_contacts}>
            <p className={s.phone}>+1 (111) 222-33-44</p>
            <div className={s.email}>
              <MailOutlined />
              <p>order@bu-one.com</p>
            </div>
          </div>
        </div>

        <div className={s.form_block}></div>

      </div>  
    </section>
  )
}

import React from 'react'
import { useSelector} from 'react-redux'
import AboutUsCard from '../AboutUsCard'
import s from './style.module.css'

export default function AboutUs() {

    const state = useSelector(state => state.data);
    
    return (
        <section className={['wrapper', s.wrapper].join(' ')}>
            <div>
                <p className='subheader'>About us</p>
                <h2 className={s.h2}>Company <span>LondonProm</span></h2>
                <p className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem, pariatur deserunt ut hic autem perspiciatis in eaque dolorem quaerat, fugit optio recusandae modi, laborum labore ullam necessitatibus tempore. Consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam blanditiis error, et officiis, architecto vel voluptatum hic, impedit consequuntur a. Earum quae doloremque asperiores porro obcaecati vel, sapiente autem!</p>
            </div>

            <div className={s.cards}>
                {
                    state.map(el => <AboutUsCard key={el.id} {...el} />)
                }
            </div>
        </section>
    )
}

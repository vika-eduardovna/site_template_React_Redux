import React from 'react'
import s from './style.module.css'
import { reviewsData } from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feedbacks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <section className={['wrapper', s.wrapper].join(' ')}>
            <p className='subheader'>Feedbacks</p>
            <h2 className={s.h2}>Your reviews</h2>
            <Slider {...settings}>
                {
                    reviewsData.map(item => (
                        <div className={s.feedback_block}>
                            <p className={s.descr}>{item.description}</p>
                            <div className={s.block_bottom}>
                                <img src={item.imageUrl} alt="" />
                                <div className={s.person_data}>
                                    <p className={s.names}>{item.first_name} {item.last_name}</p>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Slider>

        </section>
    )
}

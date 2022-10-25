import React from 'react'
import s from './style.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux'
import { addFeedback } from '../../store/reducer/reviewsReducer'


export default function Feedbacks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const dispatch = useDispatch();
    const state = useSelector(state => state.reviews);

    const submit = event => {
        event.preventDefault();
        const { first_name, position, imageUrl, description } = event.target;
        dispatch(addFeedback({
            first_name: first_name.value,
            position: position.value,
            imageUrl: imageUrl.value,
            description: description.value
        }));
    };

    return (

        <section className={['wrapper', s.wrapper].join(' ')}>
            <p className='subheader'>Feedbacks</p>
            <h2 className={s.h2}>Your reviews</h2>
            <Slider {...settings}>
                {
                    state.map(item => (
                        <div className={s.feedback_block}>
                            <p className={s.descr}>{item.description}</p>
                            <div className={s.block_bottom}>
                                <img src={item.imageUrl} alt='avatar' />
                                <div className={s.person_data}>
                                    <p className={s.names}>{item.first_name} {item.last_name}</p>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <form onSubmit={submit} className={s.form}>
                    <div className={s.data_style}>
                        <input type='text' name='first_name' placeholder='Your name' />
                        <input type='text' name='position' placeholder='Position' />
                        <input type='text' name='imageUrl' placeholder='Here your photo...' />
                    </div>
                    <div className={s.text}>
                        <textarea name='description' placeholder='Write here your opinion...'></textarea>
                        <button>Add review</button>
                    </div>
                </form>
            </Slider>

        </section>
    )
}

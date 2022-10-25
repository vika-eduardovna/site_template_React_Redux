import React from 'react'
import s from './style.module.css'
import { useDispatch} from 'react-redux';
import {addNewServiceItem} from '../../store/reducer/servicesReducer'

export default function AddServiceCard() {
  const dispatch = useDispatch();
  
    const submit = event => {
        event.preventDefault();
        const {title} = event.target;
        dispatch(addNewServiceItem(({
          title: title.value
        })));
        title.value = '';
    };

  return (
    <form className={s.form} onSubmit={submit}>
        <input type='text' name='title' placeholder='Service title'/>
        <button>Add service</button>
    </form>
  )
}

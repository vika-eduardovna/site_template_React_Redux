import React from 'react'
import s from './style.module.css'
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = data => console.log(data);
  const firstNameRegister = register('firstname', {
    required: '* Write your name'
  });

  const lastNameRegister = register('lastname', {
    required: '* Write your lastname'
  });

  const textMessageRegister = register('text_message', {
    required: '* Write your message'
  });

  return (
    <form
      className={s.contacts_form}
      onSubmit={handleSubmit(onSubmit)} >
      <div className={s.contacts_names}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name='firstname'
            placeholder='Name'
            {...firstNameRegister} />
        </label>

        <label>
          <p>Lastname</p>
          <input
            type="text"
            name='lastname'
            placeholder='Lastname'
            {...lastNameRegister} />
        </label>
      </div>

      <label>
        <p>Message</p>
        <textarea 
        name="text_message" 
        placeholder='Your text here..'
        {...textMessageRegister}></textarea>
      </label>

      <div>
        { errors?.firstname && <p>{errors?.firstname.message}</p> }
      </div>

      <div>
        { errors?.lastname && <p>{errors?.lastname.message}</p> }
      </div>

      <div>
        { errors?.text_message && <p>{errors?.text_message.message}</p> }
      </div>

      <button>Send message</button>
    </form>
  )
}

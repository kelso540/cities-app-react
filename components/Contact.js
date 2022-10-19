import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  const [state, handleSubmit] = useForm("mqkjqeln");
  
  if (state.succeeded) {
      return <p className='formEndMessage'>Thank you for your submission!</p>;
  }

  return (
    <div className='contact-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder='Email address'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Your message here'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className='submitButton'>
          Submit
        </button>
      </form>
    </div>
  );
}


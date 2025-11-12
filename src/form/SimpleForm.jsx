import React from 'react'
import { useState } from 'react'

const SimpleForm = () => {
    const[email,setEmail] = useState('');
    const [error,setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if(email){
            setError('Email is required')
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setError("Email is invalid")

        } else{
            setError('');
            alert('Form submitted successfully');
            console.log('form submitted',email);
            
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" 
        value ={email}
        placeholder ='Enter Your email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default SimpleForm
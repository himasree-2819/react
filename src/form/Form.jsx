import React, { useState } from 'react'
import './form.css';

const Form = () => {

    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(prev => ({
            ...prev,//uses spread operator to keep other value unchanged
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {};
        const { name, age, email, password, confirmPassword, gender } = formData;

        if (!name.trim()) newErrors.name = 'Name is required';

        if (!email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is Valid";

        if (!age) newErrors.age = "Age is required";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

        if (!password) newErrors.password = "password is required";
        else if (password.length < 6) newErrors.password = "password must be atleast 6 characters";

        if (!confirmPassword) newErrors.confirmPassword = "please confirm your password";
        else if (password !== confirmPassword) newErrors.confirmPassword = "password do not match";

        if (!gender) newErrors.gender = "Gender is required";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();

        if (Object.keys(validateErrors).length > 0) { //["name","email","age".........]
            setErrors(validateErrors);

        } else {
            setErrors({});
            alert("Formsubmittred successfully");
            console.log('Form Data', formData);

            // clear form field after successfull submission 

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Name */}
            <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            {/* email */}
            <div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            {/* Age */}
            <div>
                <input type="text" name='age' value={formData.age} onChange={handleChange} placeholder='Age' />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>
            {/* password */}
            <div>
                <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='password' />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            {/* confirm password */}
            <div>
                <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='password' />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>

            {/* gender */}
            <div>
                <label>
                    <input type="radio" name='gender' value='male' onChange={handleChange} checked={formData.gender === 'male'} />
                    Male
                </label>
                <label>
                    <input type="radio" name='gender' value='female' onChange={handleChange} checked={formData.gender === 'female'} />
                    Female
                </label>
                <label>
                    <input type="radio" name='gender' value='others' onChange={handleChange} checked={formData.gender === 'other'} />
                    Others
                </label>

                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>

            <button type='submit'>Submit</button>

        </form>
    )
}
export default Form
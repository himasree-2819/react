import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {
    const [formData, setFormdata] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setErrors] = useState({});
    const [isloading, setLoading] = useState(false);

    //load users from local storage - mount
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored); //
                setUsers(parsedUser);
            } catch (error) {
             console.error("Error parsing data", error);
             localStorage.removeItem("users"); //clear corrupted data
            }
        }
    })

    //save users to local storage
    useEffect(() => {
        if (isloading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isloading])
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormdata(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // validation
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'name is required';

        if (!email) newErrors.email = 'email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is Valid";

        if (!age) newErrors.age = "Age is required";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

    }
    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // if (editMode){
        // setUsers()
        //    } else {
        // }
    }
    return (
        <div className='formnew'>
            <h1>React CRUD - Simple Form</h1>
            <form>
                {/* Name */}
                <div>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your name' />
                </div>
                {/* email */}
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' />
                </div>
                {/* Age */}
                <div>
                    <input type="number" name='age' onChange={handleChange} value={formData.age} placeholder='Your age' />
                </div>
                <button type='submit'>{editMode ? 'Update user' : 'Add User'}</button>
            </form>
        </div>
    )
}

export default Crud
import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isloading, setIsLoading] = useState(false);

    //Load  users from loaclstorage
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);

            } catch (error) {
                console.error("Error parsing data", error);
                localStorage.removeItem("users");

            }
        }
        setIsLoading(true);
    }, [])

    //save users local storage//
    useEffect(() => {
        if (isloading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isloading])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //    validation 

    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'Name is required!';

        if (!email) newErrors.email = 'Email is required!';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email is required';

        if (!age) newErrors.age = "Age is reqired";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must not be between 1 and 120";


        return newErrors;
    }

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user))
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser])
        }
        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''

        });
        setError({});
    }

    return (
        <div className='formnew'>
            <h1>React CRUD - Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='your name' />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>

                <div>
                    <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Your email' />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                </div>

                <div>
                    <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='Your age' />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}

                </div>
                <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
            </form>

        </div>
    )
}

export default Crud
import React, { useEffect, useState } from 'react'
import './Crud.css'

const Crud = () => {


    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    });


    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // get
    //Load users from LocalStorage
    useEffect(() => {
        const stored = localStorage.getItem('users');

        if (stored) {
            try {
                const parsedUser = JSON.parse(stored); //to get string JSON to js object.
                setUsers(parsedUser);
            }
            catch (error) {
                console.error('Error parsing data', error);
                localStorage.removeItem('users'); //clear corrupted data.
            }
        }
        setIsLoading(true);
    }, []);



    // set
    // save users to LocalStorage.
    useEffect(() => {
        if (isLoading) {
            localStorage.setItem('users', JSON.stringify(users));
        };
    }, [users, isLoading]);



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,  //spread operator
            [name]: value
        }));
    };


    // validation

    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'Name is required';

        if (!email) newErrors.email = 'Email is required';
        else if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) newErrors.email = 'Email is invalid';

        if (!age) newErrors.age = 'Age is required';
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = 'Age must be between 1 and 120';

        return newErrors;
    }

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }


        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        }
        else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser]);
        }

        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });

        setError({});
    }


    //Edit button
    const handleEdit = (user) => {
        setFormData(user);
        setEditMode(true);
    }

    //Cancel button
    const handleCancel = () => {
        setFormData({ id: '', name: '', email: '', age: '' });
        setEditMode(false);
        setError({});
    }

    //Delete button
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));

    }
    const handleClearAll = () => {
        if(window.confirm('Are you sure you want to clear all data ? This action cannot be undone.')){
            setUsers([]);
            localStorage.removeItem("users");
            //also clear the form if an edit mode 
            if(editMode){
                setFormData({id:'', name:'', age:'',email:''});
                setEditMode(false);
                setError({});
            }
        }
    }




    return (
        <div className='formnew'>
            <h1>React CRUD - Simple Form</h1>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <input type="text" onChange={handleChange} name='name' value={formData.name} placeholder=' your name' />
                    {error && <p style={{ color: 'red' }} >{error.name}</p>}
                </div>

                {/* // email */}
                <div>
                    <input type="email" onChange={handleChange} name='email' value={formData.email} placeholder=' your email' />
                    {error && <p style={{ color: 'red' }} >{error.email}</p>}
                </div>

                {/* // age */}
                <div>
                    <input type="text" onChange={handleChange} name='age' value={formData.age} placeholder=' your age' />
                    {error && <p style={{ color: 'red' }} >{error.age}</p>}
                </div>
                <button type='submit'>{editMode ? 'Update User' : 'Add User'} </button>
                {
                    editMode && (
                        <button type='button' onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancel</button>
                    )
                }
            </form>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2>User List</h2>
                {/* clear data button  */}
                {users.length > 0 && (
                    <button onClick={handleClearAll}
                     style={{
                        background: '#dc345',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginLeft: '30px'
                    }}
                    >Clear All Data</button>
                )}

            </div>

            {users.length > 0 ? (
                <table style={{ marginLeft: '10px' }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(us => (
                            <tr key={us.id}>
                                <td>{us.name}</td>
                                <td>{us.email}</td>
                                <td>{us.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(us)} >Edit</button>
                                    <button onClick={() => handleDelete(us.id)} style={{ marginLeft: '10px' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users added yet</p>
            )}

        </div>
    );
};

export default Crud
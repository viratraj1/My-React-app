
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        mobile: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Registration successful!');
        // Optionally, you can redirect or do other actions after registration
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />

            <label>Mobile:</label>
            <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
            />

            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;


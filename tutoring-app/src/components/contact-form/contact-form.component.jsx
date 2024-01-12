/*
    This component provides and manages a contact form.
    It imports styles from the './contact-form.styles.scss' file. 
    It utilizes the 'useState' hook, tracking the subject, name, email, and message fields. 
    The component includes event handlers for input changes and form submission.
    The 'handleChange' function dynamically updates the form data as users type into the input fields, 
    ensuring that the state accurately reflects the user's input.
    The 'handleSubmit' function prevents the default form submission behavior, constructs an email data object with the form input, 
    sends a POST request to the server, and clears the form after submission.
*/

import React, { useState } from 'react';
import './contact-form.styles.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://www.sharedvision-tutoring.com/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log(formData);
                console.log('Form submitted successfully,,');
                // Clear the form after submission
                setFormData({
                    subject: '',
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Form submission failed(1)');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="contact-form-container">
            <h1>Contact Me (COMING SOON)</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;

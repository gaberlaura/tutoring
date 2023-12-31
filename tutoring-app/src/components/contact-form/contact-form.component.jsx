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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Will replace the following with server-side logic to handle email submission.
        const emailData = {
            to: 'gaberlaura42@gmail.com',
            subject: 'New Contact Form Submission',
            body: `Subject: ${formData.subject}\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        };

        // Will send this data to the server
        console.log(emailData);

        // Clear the form after submission
        setFormData({
            subject: '',
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-form-container">
            <h1>Contact</h1>
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
                    type="email"
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

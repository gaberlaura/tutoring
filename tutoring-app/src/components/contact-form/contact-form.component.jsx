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

    const [errors, setErrors] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the related error when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.subject.trim()) {
            console.log('subject:', formData.subject.trim());
            newErrors.subject = 'Subject is required';
            valid = false;
        }

        if (!formData.name.trim()) {
            console.log('name:', formData.name.trim());
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim() || !isValidEmail(formData.email)) {
            console.log('email:', formData.email.trim());
            newErrors.email = 'Valid email is required';
            valid = false;
        }

        if (!formData.message.trim()) {
            console.log('message:', formData.message.trim());
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch('https://www.sharedvision-tutoring.com/submit-form', {
                    //await fetch('http://localhost:3001/submit-form', {
                    //await fetch('https://main--golden-dragon-88501c.netlify.app/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log(formData);
                    console.log('Form submitted successfully,,');
                    setSubmissionStatus('success');

                    // Clear the form after submission
                    setFormData({
                        subject: '',
                        name: '',
                        email: '',
                        message: '',
                    });

                } else {
                    console.error('Form submission failed(1)');
                    setSubmissionStatus('error');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setSubmissionStatus('error');
            }
        } else {
            console.error('Form validation failed');
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="contact-form-container">
            <h1>Contact Me (COMING SOON)</h1>
            {submissionStatus === 'success' && (
                <div className="success-or-error-message">Thanks! We'll be in touch soon.</div>
            )}
            {submissionStatus === 'error' && (
                <div className="success-or-error-message">Form submission failed. Please try again.</div>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <span className="error-message">{errors.subject}</span>

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <span className="error-message">{errors.name}</span>

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <span className="error-message">{errors.email}</span>

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <span className="error-message">{errors.message}</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;

/* 
    Here is where the server-side functionality of the Contact Form gets handled.
    It is a Node.js application using the Express framework to set up a server. 
    The server is configured to handle HTTP POST requests to the endpoint /submit-form. 
    The primary purpose of this endpoint is to receive form data from a client, specifically email-related information. 
    Upon receiving the data, the server uses the Nodemailer library to send an email using a Gmail account configured with specific credentials.
*/

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Allow specific headers in CORS configuration
app.use(cors({
    origin: 'https://main--golden-dragon-88501c.netlify.app',
    methods: 'POST',
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the headers your client is sending
}));

// Set up nodemailer transporter outside the route handler
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sharedvisiontutoring00@gmail.com',
        pass: 'rise zfqp dysu etii',
    },
});

app.post('/submit-form', async (req, res) => {
    // Handle email submission logic here
    const emailData = req.body;
    console.log(emailData);

    // Compose email options
    const mailOptions = {
        from: 'sharedvisiontutoring00@gmail.com',
        to: 'gaberlaura42@gmail.com',
        subject: emailData.subject,
        text: `From: ${emailData.email}\nMessage: ${emailData.message}`,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Form submitted successfully...');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});

// will initalize variable
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import axios from 'axios';
import dotenv from 'dotenv';
import { TokenClass } from 'typescript';

//will initialize the dotenv 
dotenv.config();

const app = express();
app.use(bodyParser.json());

const recaptchaSecret = process.env.RECAPTCHA_SECRET; //saves the secret key

app.post('/api/send-email', async (req, res) => {
    const { name, email, message, token } = req.body;
    
    // will verify the recaptcha token
    try{
        const recaptchaResponse = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: recaptchaSecret,
                    response: token,
                },
            }
        );
        console.log('hey');
        console.log('reCAPTCHA response:', recaptchaResponse.data);
        console.log('token:', token);

        // checks if the recaptcha was successfuly
        if(!recaptchaResponse.data.success){
            return res.status(400).send('reCAPTCHA verification failed.')
        }

        // sets up the email transport
        const tranporter = nodemailer.createTransport({
            service : 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // will send the email
        const mailOptions = {
            from: email,
            to: 'saharabanquethall.01@gmail.com',
            subject: 'Contact Form Submission',
            text: 'Name: ${name}\nEmail: ${email}\nMessage: ${message}',
        };

        await tranporter.sendMail(mailOptions); // will send the email

        res.status(200).send('Email successfully sent.');
    } catch(error){
        
        console.error('Error: ', error);
        res.status(500).send('Server error'); 
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

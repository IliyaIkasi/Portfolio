const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

router.get('/contact', async(req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.post('/', async(req, res) => {
    console.log(req.body);
    let password = process.env.PASSWORD;
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'iliyaikasi@gmail.com',
            pass: password
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'iliyaikasi@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.message}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('Error sending email');
        } else {
            console.log('Success \nEmail Sent: ' + info.response);
            res.send('success');
        }
    })
});


module.exports = router;
//ExpressJS setup
const express = require('express');
const app = express();

//dotenv setup
require('dotenv').config();

//nodemailer setup
const nodemailer = require('nodemailer');

//EJS setup
const ejsLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
app.set('view engine', 'ejs');
// app.use(ejsLayouts);

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require static assets from public folder
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render("index");
  });


//gmail not accepting messages from nodemailer, have to setup OAUTH2 authentication
//https://www.youtube.com/watch?v=-rcRf7yswfM
//or app password with 2-step authentication
app.post('/', (req,res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'rarevisionslightshow@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  })
  const mailOptions = {
    from: req.body.email,
    to: 'rarevisionslightshow@gmail.com',
    subject: `Website message from ${req.body.name}`,
    text: `Email: ${req.body.email}\nEvent date: ${req.body.date}\nMessage: ${req.body.message}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  })

})
// app.get("/:pageName", function(req,res){
//     res.render(req.params.pageName);
//     });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Server running on port ${PORT}`);
});

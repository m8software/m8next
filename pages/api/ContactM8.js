// require("dotenv").config();
const emailjs = require("emailjs");


import Cors from 'cors'
// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'HEAD'],
})
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}


export default async function handler(req, res) {

  await runMiddleware(req, res, cors);


  console.log(req.body);

    const { name, email, company, text } = req.body;

    // const transporter = nodemailer.createTransport( {
    //   service: "Gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //   },
    // });



    var templateParams = {
      from_name: email,
      message: text
  };
   
  emailjs.send('service_31x7ikm', 'template_wwt2wbg', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
  
  }
  
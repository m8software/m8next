// require("dotenv").config();

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


      e.preventDefault();
      console.log(name, message, email)
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
   

          },
            body: JSON.stringify({
              "service_id": "service_31x7ikm", 
              "template_id": "template_wwt2wbg",
              "user_id": "AtMeaI7BgTYWRxNFb",
              "template_params": templateParams
            })
      })
      .then(data => {
        console.log('Success:', data);
        setSent(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setSent(false);
      });
  
  }
  

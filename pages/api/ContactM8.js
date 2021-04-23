// require("dotenv").config();
const nodemailer = require("nodemailer");


function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}


import Cors from 'cors'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)


export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  console.log(req.body)

    const { name, email, company, text } = req.body;

    const transporter = nodemailer.createTransport( {
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    const mailOption = {
      from: `${process.env.EMAIL}`,
      to: `sean@m8sw.com`,
      subject: `New mail from ${email}`,
      text: `
      ${name} from ${company} wrote:
      ${text}
      `,
    };
  
    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
          console.log(err);
          res.send("error" + JSON.stringify(err));
        } else {
          console.log("mail send");
          res.send("success");
        }
    });
    
 
  }
  
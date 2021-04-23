// require("dotenv").config();
const nodemailer = require("nodemailer");



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
  
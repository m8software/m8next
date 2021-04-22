// require("dotenv").config();
const nodemailer = require("nodemailer");


export default (req, res) => {

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
  
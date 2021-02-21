const nodemailer = require('nodemailer');
const md5=require("md5")

exports.sendVerificationEmail = async (emailID,firstName,lastName) => {
    const hashedEmailID=md5(emailID)
    
    let transporter = nodemailer.createTransport({
        service:'gmail',
        //port: 587,
        //secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_SENDER, // generated GMAIL user
          pass: process.env.EMAIL_SENDER_PASSWORD // generated GMAIL password
        }
      });

  const URL=process.env.EMAIL_VERIFICATION_REDIRECT_LOCAL
  let info = await transporter.sendMail({
    from: process.env.EMAIL_SENDER, // sender address
    to: emailID, // list of receivers
    bcc: "",
    replyTo: process.env.EMAIL_SENDER,
    subject: "VERIFICATION EMAIL!!", // Subject line
    //<a href="${EMAIL_VERIFICATION_REDIRECT_LOCAL}">Click To verify Email</a>
    text: `Thanks for registering to ${process.env.APP_NAME} ${firstName} ${lastName}.`, // plain text body
    html: `Thanks for registering to ${process.env.APP_NAME} ${firstName} ${lastName}, <a href="${URL}/${hashedEmailID}">Click To verify Email</a>` // html body
  });

  console.log(info)
  
}

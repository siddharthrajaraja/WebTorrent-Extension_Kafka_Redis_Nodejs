const nodemailer = require('nodemailer');
const md5=require("md5")

exports.sendPasswordUpdationEmail = async (emailID) => {
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
    subject: "FORGOT PASSWORD EMAIL!!", // Subject line
    //<a href="${EMAIL_VERIFICATION_REDIRECT_LOCAL}">Click To verify Email</a>
    text: `Forgot your password of ${process.env.APP_NAME} ${emailID}?`, // plain text body
    html: `Forgot your password of ${process.env.APP_NAME} ${emailID}? <a href="${process.env.UPDATE_PASSWORD_EMAIL_REDIRECT_LOCAL}?id=${hashedEmailID}&emailID=${emailID}">Click To Update Password</a>` // html body
  });

  console.log(info)
  
}

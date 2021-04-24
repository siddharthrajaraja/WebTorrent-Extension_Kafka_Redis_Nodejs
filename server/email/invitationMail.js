const nodemailer = require('nodemailer');
const md5=require("md5")

exports.sendInvitationEmail = async (emailID,roomID) => {
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
    subject: "INVITATION EMAIL!!", // Subject line
    //<a href="${EMAIL_VERIFICATION_REDIRECT_LOCAL}">Click To verify Email</a>
    text: `HELLO ${emailID}, please join ${process.env.APP_NAME} new Room given below!! `, // plain text body
    html: `HELLO ${emailID}, please join ${process.env.APP_NAME} new Room given below!! , <a href="${process.env.ROOM_MAIL_URL}?id=${hashedEmailID}&emailID=${emailID}&roomID=${roomID}">Click To JOIN GROUP!!</a>` // html body
  });

  console.log(info)
  
}

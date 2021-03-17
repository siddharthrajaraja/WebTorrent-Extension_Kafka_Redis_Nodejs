const {sendInvitationEmail}=require('../email/invitationMail')
exports.mailRoomID=(req,res)=>{
    const {emailIDs,roomID}=req.body
    console.log(req.body)
    emailIDs.forEach(async(everyID)=> {
        await sendInvitationEmail(everyID,roomID)
    });
    res.status(200).json({flag:"EMAIL SENT!!"})
}
const {homepage, login, signup, forgotPassword, updatePassword, verifyEmail, main}=require('../controllers/homepage')
module.exports=(app)=>{
    app.get('/homepage',homepage);

    app.get('/login',login);

    app.get('/signup',signup);

    app.get('/forgotPassword',forgotPassword);

    app.get('/updatePassword',updatePassword);

    app.get('/verifyEmail',verifyEmail);

    app.get('/main',main);
}

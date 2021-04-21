exports.homepage=(req,res)=>{
    res.render('index.ejs')
}

exports.login = (req,res) => {
    res.render('auth/login.ejs');
}

exports.signup = (req,res) => {
    res.render('auth/signup.ejs');
}

exports.forgotPassword = (req, res) => {
    res.render('auth/forgotPassword.ejs');
}

exports.updatePassword = (req, res) => {
    res.render('auth/updatePassword.ejs');
}

exports.verifyEmail = (req, res) => {
    res.render('auth/verifyEmail.ejs');
}
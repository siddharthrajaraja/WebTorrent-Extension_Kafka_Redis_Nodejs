const {homepage}=require('../controllers/homepage')
module.exports=(app)=>{
    app.get('/homepage',homepage)
}
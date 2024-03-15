const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhvienRoute = require('./routes/sinhvienRoute');

const app = express();
// ket noi mongoose 
mongoose.connect('mongodb://localhost:27017/and103',{
    useNewUrlParser : true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log("ket noi thanh cong server");
}).catch((err)=> {
    console.error(err);
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
// su dung route
app.use('/',sinhvienRoute);
//goi den file ejs 
app.set('view engine','ejs');
//tao port
const PORT = process.env.PORT || 3000;
//chay server 
app.listen(PORT,()=>{
    console.log("server chay o cong 3000")
});
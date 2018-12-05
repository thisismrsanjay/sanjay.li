const express = require('express');
const app =  express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const urls = require('./db/url');


const port = process.env.PORT || 3000;





app.use(morgan('tiny'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/api/sanjay',async (req,res)=>{
    
    console.log(req.body);
    try {
        const url = await urls.create(req.body);
        res.redirect('/',{url});
    } catch (error) {
        res.status(500);
        res.json(error);
    }
    
})


app.listen(port,()=>{
    console.log('server started at 3000');
})
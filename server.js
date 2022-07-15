const express = require('express');
const app = express(); //call the express


app.use(express.static('public')) // specifically for static file, pass the folder name (eg:public)
app.set('view engine', 'ejs')

// app.get('/', logger, (req,res) => { //call logger middleware first, then (req,res) because in logger we use next(), to pass the control to next fx
//     res.render('index', {text: 'world'}) //render html file, need to change file name from html to ejs.
// })

const userRouter = require('./routes/users')

app.use('/users', userRouter);


function logger(req,res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000);
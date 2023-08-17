const express = require('express');
const cors = require('cors');
var path = require('path');
const mongoose = require('mongoose');
const blog = require('./blog');
const signup = require('./signup');
require('dotenv').config()


const bodyParser = require('body-parser');
const SignUp = require('./signup');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_NAME, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})

app.get('/get',cors(), async(req, res)=>{
    try {
        const Blog = await blog.find();
        res.status(200).send(Blog);
    } catch (error) {
        console.log(error);
    }
})

app.get('/blogform',cors(), async(req, res)=>{
    try {
        const Blog = await blog.find();
        res.status(200).send(Blog);
    } catch (error) {
        console.log(error);
    }
})

app.get('/blogform/:id',cors(), async(req, res)=>{ // get specific blog
    try {
        // console.log(req.params, "get DATA !");
        const Blog = await blog.findOne({_id: req.params.id});
        console.log(Blog);
        res.status(200).send(Blog);
    } catch (error) {
        console.log(error);
    }
})

app.post('/post', async(req, res)=>{ // create blog API
    const Blog = new blog({
        title: req.body.title,
        subtitle: req.body.subtitle,
        Description: req.body.Description
    });
    console.log(Blog);

    try {
        await Blog.save();
        res.send({
            status: 200,
            message: 'Inserted Row sucessfully !',
            blogData: Blog
        });
    } catch (error) {
        console.log(error);
    }
})

app.put('/rename/:id', async(req, res)=>{ // update blog API
    try {
        // console.log(req.params.id);
        const Blog = await blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(Blog);
        if (!Blog) {
            res.send({
                status: 401,
                message: 'Error of status 401 while updating Process !',
                error: 'Error 401 found !'
            });
        }
        res.send({
            status: 200,
            message: 'Updated One Row sucessfully !',
            blogData: Blog
        });

    } catch (error) {
        res.send({
            status: 500,
            message: 'Error of status 500 while updating Process !',
            error: error
        });
    }
})

app.delete('/remove/:id', async(req, res)=>{
    try {
        const Blog = await blog.findByIdAndDelete({ _id: req.params.id });
        if (!Blog) {
            return res.status(401);
        }
        res.send("Deleted Sucessfully !");
    } catch (error) {
        res.status(501).send(error.message);
    }
})

// Signup API

app.post('/signup', async(req, res)=>{
    const SignUp = new signup({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    console.log(SignUp);

    try {
        await SignUp.save();
        res.send({
            status: 200,
            message: 'Inserted Row sucessfully !',
            signUpDetails: SignUp
        });
    } catch (error) {
        console.log(error);
    }
})
// login API
app.post('/login', async(req, res)=>{
   const {email, password} = req.body;
   SignUp.findOne({email: email})
   .then(user =>{
        if(user){
            console.log(user, 'data here');
            if(user.email === email && user.password === password){
                res.json('Login sucessfully !');
            
            }
            else{
                res.json('password invalid !');    
            }
        }else{
            console.log('this user is not availble !');
            res.json('User not exist !');
        }
   })
})

app.listen(process.env.PORT || 3080, (req, res)=>{
    console.log(`Server connected !` + process.env.PORT);
})
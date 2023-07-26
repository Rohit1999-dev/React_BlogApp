const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const blog = require('./blog');

const bodyParser = require('body-parser');
const app = express();
const port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/${DATABASE_NAME}', 
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

app.post('/post', async(req, res)=>{
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


app.listen(port, (req, res)=>{
    console.log(`Server connected !` + port);
})
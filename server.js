require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const Post = require('./models/Post.js');

app.use(bodyParser.json());

app.get('/posts', async (req, res) => {
    try {
        const response = await Post.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

app.post('/api/posts', async(req, res) => {
    
    try{
        const post = await Post.create(req.body);
        if(!post) res.status(400).json({message: 'Post Not Added'});
    
        res.status(200).json({message: 'Post Successfully Registered', post});

    }catch (error) {
        res.status(400).json({msg: error.message});
    }

});

//* Get Single Post
app.get('/api/posts/:id', async (req, res) => {
    
    try{
        let { id } = req.params;
        const post = await Post.findById(id)
        res.json(post);
    }catch (error) {
        res.status(400).json({msg: error.message});
    }
});

app.delete('/api/posts/:id', async(req, res) => {
    
    try{
        let { id } = req.params;
    
        const deletedPost = await Post.findByIdAndDelete(id);
        res.json(deletedPost);
    }catch (error) {
        res.status(400).json({msg: error.message});
    }
})

app.patch('/api/posts/:id', async(req, res) => {

   try {
    let { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
    if(!post) res.status(400).json({message: 'Post Not Found'});

    res.status(200).json({msg: 'Post Updated Successfully'}, post);
   } catch (error) {
        res.status(400).json({msg: error.message});
    }
})

//Users Section

const run = async() => {
    try {
        const MONGO_URL = process.env.MONGO_URL;
        const dbConnect = await mongoose.connect(MONGO_URL);
        if(dbConnect) {
            const PORT = process.env.PORT || 3001;
            app.listen(PORT, () => {
                console.log(`Server is Running ON Port ${PORT}`);
            })
        }
    }catch(err) {
        console.error(err.message);
    }
}

run();
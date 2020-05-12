const express = require("express");
const Post = require("./models/Post");
const router = express.Router();

// Get all posts
router.get("/posts", async (req, res) => {
    try{
        const posts = await Post.find()
        res.send(posts)
    } catch (error){
        res.status(500).send(error);
    }
});

router.post("/posts", async (req, res) => {
    try{
        const post = new Post({
            title: req.body.title,
            content: req.body.content
        })
        await post.save()
        res.send(post)
    } catch (error){
        res.status(500).send(error)
    }
})

router.get("/posts/:id", async (req, res) => {
    try{
        const post = await Post.findOne({_id: req.params.id})
        res.send(post)
    } catch (error){
        res.status(500).send(error);
    }
})

module.exports = router
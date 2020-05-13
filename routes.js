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
        /// authenticate user and get reference here

        const post = new Post({
            image: req.body.image,
            time_created: Date.now(),
            likes: [],
            comments: []
        })

        // add if remix or comment here

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
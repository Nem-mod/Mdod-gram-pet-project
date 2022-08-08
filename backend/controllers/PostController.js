import PostModel from "../models/Post.js"


export const createPost = async (req, res) => {
    try {
        console.log(req.body);
        const doc = new PostModel({
            user: req.userId,
            text: req.body.text,
            imgUrls: req.body.imgUrls,
            tags: req.body.tags
        });
        console.log(doc);
        const post = await doc.save();
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'failed to create post'
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec();
        if(!posts) {
            return res.status(400).json({
                message: 'No posts'
            });
        }
        
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'failed to retrieve posts'
        });
    }
}

export const getLastTags = async (req, res) => {
    try {
        const posts = await PostModel.find().limit(2).exec();

        const tags = posts
            .map(obj => obj.tags)
            .flat()
            .slice(0,5);

        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'failed to retrieve posts'
        });
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndUpdate(
            {
                _id: postId,
            }, 
            {
                $inc: {viewsCount: 1},
            },
            {
                returnDocument: 'after'
            },
            (err, doc) => {
                if(err) {
                    return res.status(500).json({
                        message: 'failed to retrieve post'
                    });
                }
                if (!doc) {
                    return res.status(400).json({
                        message: 'Post not found'
                    });
                }
                res.json(doc);
            }
        );
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'failed to retrieve posts'
        });
    }
}

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndDelete(
            {
                _id: postId,
            }, 
            (err, doc) => {
                if(err) {
                    console.log(error);
                    return res.status(500).json({
                        message: 'failed to delete post'
                    });
                }
                if (!doc) {
                    return res.status(400).json({
                        message: 'Post not found'
                    });
                }
                res.json({
                    message: "success"
                });
            }
        );
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'failed to retrieve posts'
        });
    }
}

export const update = async (req, res) => {
    try {
        const postId = req.params.id;
        await PostModel.updateOne(
            {
                _id: postId,
            }, 
            {
                user: req.userId,
                text: req.body.text,
                imgUrls: req.body.imgUrls,
                tags: req.body.tags
            },
        );
        res.json({
            message: "success"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'failed to update post'
        });
    }
}
import Blog, { find } from '../models/blog';

export async function getAllBlogs(req, res) {
    try {
        const blogs = await find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createBlog(req, res) {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

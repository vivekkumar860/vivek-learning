import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div>
            <h1>Blogs</h1>
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Blog;

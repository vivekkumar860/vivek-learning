import React from 'react';

function BlogPost({ blog }) {
    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <small>{new Date(blog.date).toLocaleDateString()}</small>
        </div>
    );
}

export default BlogPost;

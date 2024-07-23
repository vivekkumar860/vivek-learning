import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ blogs }) {
    return (
        <div>
            {blogs.map(blog => (
                <BlogPost key={blog._id} blog={blog} />
            ))}
        </div>
    );
}

export default BlogList;

import React, { useState } from 'react';

function PostBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        }).then(() => {
            setTitle('');
            setContent('');
        });
    };

    return (
        <div>
            <h1>Post a Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostBlog;

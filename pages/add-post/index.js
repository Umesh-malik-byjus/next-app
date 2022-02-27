import React, { useState } from 'react'

const Index = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const addPost = async () => {
        await fetch('/api/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title,
                body
            })
        });
    };

    return (
        <div>
            <h2>Add Post</h2>
            <div>
                <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                <input type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Content" />
                <button type="submit" onClick={()=>addPost()}>Submit</button>
            </div>
        </div>
    )
}

export default Index
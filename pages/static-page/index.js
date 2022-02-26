import React, { useEffect, useState } from 'react'

const index = (props) => {
    const { post = [] }= props;
    return (
        <div>
            <h2>Posts</h2>
            <div>
                {post.map(p => (
                    <div key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index;

export async function getStaticProps(context) {
    const res = await fetch('/api/get-post',{
        method: 'GET'
    });
    const posts = await res.json();
    return {
        props: {
            post: posts
        }
    }
}
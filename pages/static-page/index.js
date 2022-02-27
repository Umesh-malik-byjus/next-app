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

export async function getStaticProps() {
    const url = `${process.env.HOST_URL}/api/get-post`
    const res = await fetch(url,{
        method: 'GET'
    });
    const posts = await res.json();
    return {
        props: {
            post: posts
        }
    }
}
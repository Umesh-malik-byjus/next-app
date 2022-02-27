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
    console.log('getStaticProps');
    console.log(process.env.HOST_URL);
    const res = await fetch(`${process.env.HOST_URL}/api/get-post`,{
        method: 'GET'
    });
    console.log(res)
    const posts = await res.json();
    console.log(posts);
    return {
        props: {
            post: posts
        }
    }
}
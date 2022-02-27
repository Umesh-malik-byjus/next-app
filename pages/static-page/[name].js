import { useRouter } from 'next/router'
import React from 'react'

const Posts = (props) => {
    const { post = {} } = props;
    const router = useRouter();
    const deletePost = async (id) => {
        const url = `/api/delete-post`
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });
        router.back();
    }

    return (
        <div>
            <h2>Post from static paths and cached on build time</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=> deletePost(post.id)}>Delete Post</button>
        </div>
    )
}

export default Posts

export async function getStaticPaths(context){
    // const url = `${process.env.HOST_URL}/api/get-posts`
    // const res = await fetch(url,{
    //     method: 'GET'
    // });
    const posts = []
    const paths = posts.map(post => ({
        params: {
            name: post.id
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    // const {name} = params;
    // const url = `${process.env.HOST_URL}/api/get-post`
    // const res = await fetch(url,{
    //     method: 'POST',
    //     body: JSON.stringify({
    //         id: name
    //     })
    // });
    // const posts = await res.json();
    return {
        props: {
            post: []
        }
    }
}
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Index = () => {
    const [posts, setPosts] = useState([]);
    const [arePostLoading, setArePostLoading] = useState(true);

    useEffect(() => {
        // fetch('/api/get-posts')
        //     .then(res => res.json())
        //     .then(data => setPosts(prevState => data))
        // setArePostLoading(prevState => !prevState);
    }, []);

  return (
    <div>
        <div style={{float:'right', marginRight:'2vw'}}>
                <Link href='/add-post' passHref>
                    <button>Add New Post</button>
                </Link>
            </div>
        <h2>Posts from CSR/Client Side Rendering</h2>
        <div>
            {(posts.length === 0 && arePostLoading) ? 
                <h1>Loading...</h1> :
                posts.length === 0 ?
                    <h1>No Posts Available</h1> :
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Index
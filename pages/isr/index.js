import Link from "next/link";

const Index = (props = {}) => {
    const { post = [] }= props;
    return (
        <div>
            <div style={{float:'right', marginRight:'2vw'}}>
                <Link href='/add-post' passHref>
                    <button>Add New Post</button>
                </Link>
            </div>
            <h2>Cached Posts Using ISR/Incremental static site generation</h2>
            <div>
                {post && post.map(p => (
                    <div key={p.id}>
                        <Link href={`/isr/${p.id}`} passHref>
                            <h3 style={{cursor:"pointer", textDecoration:'underline'}}>{p.title}</h3>
                        </Link>
                        <p>{p.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index

export async function getStaticProps() {
    const url = `${process.env.HOST_URL}/api/get-posts`
    const res = await fetch(url,{
        method: 'GET'
    });
    const posts = await res.json();
    return {
        props: {
            post: posts
        },
        revalidate: 60
    }
}
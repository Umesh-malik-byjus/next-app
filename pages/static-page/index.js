import Link from "next/link";

const index = (props) => {
    const { post = [] }= props;
    return (
        <div>
            <div style={{float:'right', marginRight:'2vw'}}>
                <Link href='/add-post'>
                    <button>Add New Post</button>
                </Link>
            </div>
            <h2>Cached Posts</h2>
            <div>
                {post.map(p => (
                    <div key={p.id}>
                        <Link href={`/static-page/${p.id}`}>
                            <h3 style={{cursor:"pointer", textDecoration:'underline'}}>{p.title}</h3>
                        </Link>
                        <p>{p.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index;

export async function getStaticProps() {
    const url = `${process.env.HOST_URL}/api/get-posts`
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
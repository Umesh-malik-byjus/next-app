import Link from "next/link";
import { useRouter } from "next/router";

const Index = (props = {}) => {
    const { post = [] }= props;
    const router = useRouter();

    const revalidate = () => {
        fetch(`/api/revalidate`)
            .then(res => res.json())
            .then(data => {
                if (data.revalidated === true) {
                    router.reload();
                }
            })
    }
    return (
        <div>
            <div style={{float:'right', marginRight:'2vw'}}>
                <Link href='/add-post' passHref>
                    <button>Add New Post</button>
                </Link>
            </div>
            <button onClick={()=> revalidate()}>
                Revalidate Posts
            </button>
            <h2>Cached Posts Using On-demand ISR/Incremental static site generation</h2>
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
        }
    }
}
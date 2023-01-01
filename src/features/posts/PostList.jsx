import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPosts } from "./postsSlice";

export const PostList = () => {
    const posts = useSelector(selectPosts);

    return (
        <>
            <section className="posts-list">
                <h2>Posts</h2>
                { posts.map((post,index) => (
                    <article className="post-excerpt" key={index}>
                        <h3>{post.title}</h3>
                        <p className="post-content">{post.content.substring(0, 100)}</p>    
                        <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
                    </article>
                ))}
            </section>
        </>
    )
};
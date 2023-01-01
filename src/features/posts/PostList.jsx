import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { selectPosts } from "./postsSlice";
import { ReactionButtons } from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";

export const PostList = () => {
    const posts = useSelector(selectPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <>
            <section className="posts-list">
                <h2>Posts</h2>
                { orderedPosts.map((post,index) => (
                    <article className="post-excerpt" key={index}>
                        <h3>{post.title}</h3>
                        <PostAuthor authorId={post.authorId}/>
                        <TimeAgo timestamp={post.date}/>
                        <p className="post-content">{post.content.substring(0, 100)}</p>    
                        <ReactionButtons postId={post.id} reactions={post.reactions}/>
                        <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
                    </article>
                ))}
            </section>
        </>
    )
};
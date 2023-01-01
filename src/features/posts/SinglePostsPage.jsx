import { useSelector } from "react-redux";
import { PostAuthor } from "./PostAuthor";
import { selectPost } from "./postsSlice";
import { TimeAgo } from "./TimeAgo";


export const SinglePostsPage = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector(selectPost(postId));

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <PostAuthor authorId={post.authorId}/>
                <TimeAgo timestamp={post.date}/>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}
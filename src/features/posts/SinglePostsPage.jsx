import { useSelector } from "react-redux";
import { selectPost } from "./postsSlice";

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
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}
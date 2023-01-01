import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { editPost, selectPost } from "./postsSlice"

export const EditPostForm = ({ match }) => {
    const { postId } = match.params;
    const post = useSelector(selectPost(postId))
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSave = () => {
        console.log(editPost(postId, title, content))
        dispatch(editPost(postId, title, content))
        history.push(`/posts/${postId}`)
    } 

    return (
        <>
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" placeholder="What's on your mind?" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
            </form>
            <button type="button" onClick={handleSave}>
                Save Post
            </button>
        </section> 
        </>
    )
}
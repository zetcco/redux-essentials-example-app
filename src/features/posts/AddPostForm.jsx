import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const saveClickHandle = () => {
        if (title && content) {
            dispatch(addPost(title, content))
            setTitle('')
            setContent('')
        }
    }

    return (
        <>
            <section>
                <h2>Add a New Post</h2>    
                <form>
                    <label htmlFor="postTitle">Post Title: </label>
                    <input type="text" id="postTitle" name="postTitle" value={title} onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="postTitle">Content: </label>
                    <input type="text" id="postContent" name="postContent" value={content} onChange={e => setContent(e.target.value)}/>
                    <button type="button" onClick={saveClickHandle}>Save Post</button>
                </form>
            </section>     
        </>
    );
}
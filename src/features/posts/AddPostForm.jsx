import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUsers } from "../users/usersSlice";
import { addPost } from "./postsSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();

    const users = useSelector(selectUsers);

    const saveClickHandle = () => {
        console.log(author)
        if (title && content && author) {
            dispatch(addPost(author, title, content))
            setTitle('')
            setContent('')
            setAuthor('')
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
                    <label htmlFor="postAuthor">Author: </label>
                    <select id="postAuth" value={author} onChange={e => setAuthor(e.target.value)}>
                        { users.map( (user, index) => ( <option key={index} value={user.id}>{user.name}</option> )) }
                    </select>
                    <button type="button" onClick={saveClickHandle}>Save Post</button>
                </form>
            </section>     
        </>
    );
}
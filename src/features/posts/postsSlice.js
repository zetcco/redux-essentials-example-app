import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        addPost: {
            reducer(state, actions) {
                state.push(actions.payload)
            },
            prepare(title, content) {
                return ({
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                })
            }
        },

        editPost: {
            reducer(state, actions) {
                const post = state.find( (post) => post.id === actions.payload.id )
                if (post) {
                    post.title = actions.payload.title
                    post.content = actions.payload.content
                }
            },
            prepare(id, title, content) {
                return ({
                    payload: {
                        id,
                        title,
                        content
                    }
                })
            }
        }
    }
});

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts;
export const selectPost = (postId) => state => state.posts.find( (post) => post.id === postId );

export const { addPost, editPost } = postsSlice.actions;
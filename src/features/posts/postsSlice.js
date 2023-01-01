import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', date: '2023-01-01T09:22:38.706Z', content: 'Hello!', reactions: { 'thumbsUp': 0, 'heart': 0, 'thumbsDown': 0 } },
    { id: '2', title: 'Second Post', date: '2023-01-01T09:22:58.998Z', content: 'More text', reactions: { 'thumbsUp': 0, 'heart': 0, 'thumbsDown': 0 } }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        addPost: {
            reducer(state, actions) {
                state.push(actions.payload)
            },
            prepare(authorId, title, content) {
                return ({
                    payload: {
                        id: nanoid(),
                        authorId,
                        date: new Date().toISOString(),
                        title,
                        content,
                        reactions: { 'thumbsUp': 0, 'heart': 0, 'thumbsDown': 0 }
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
        },

        addReaction: {
            reducer(state, actions) {
                const post = state.find( (post) => post.id === actions.payload.id )
                if (post)
                    post.reactions[actions.payload.reaction] += 1
            },
            prepare(id, reaction) {
                return ({
                    payload: {
                        id,
                        reaction
                    }
                })
            }
        }
    }
});

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts;
export const selectPost = (postId) => state => state.posts.find( (post) => post.id === postId );

export const { addPost, editPost, addReaction } = postsSlice.actions;
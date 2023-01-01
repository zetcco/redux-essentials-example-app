import { useDispatch } from "react-redux"
import { addReaction } from "./postsSlice";

const reactionEmojis = {
    thumbsUp: '👍',
    heart: '💖',
    thumbsDown: '👎'
}

export const ReactionButtons = ({ postId, reactions }) => {

    const dispatch = useDispatch();

    return (
        <>
            {
                Object.entries(reactionEmojis).map(([ name, emoji ], index) => ( 
                    <button key={index} type="button" className="muted-button reaction-button" onClick={() => dispatch(addReaction(postId, name))}>
                        {emoji} {reactions[name]}
                    </button>
                 ))
            }        
        </>
    )
}
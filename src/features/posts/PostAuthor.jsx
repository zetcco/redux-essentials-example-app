import { useSelector } from "react-redux";
import { selectUser } from "../users/usersSlice";

export const PostAuthor = ({ authorId }) => {

    const author = useSelector(selectUser(authorId))

    return (
        <>
            <span>{author ? author.name : 'Unknow Author'}</span>
        </>
    );
}
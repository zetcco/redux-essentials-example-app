import { formatDistanceToNow } from "date-fns"
import { parseISO } from "date-fns/esm"

export const TimeAgo = ({ timestamp }) => {

    let timeAgo = ''
    if (timestamp) 
        timeAgo = `${formatDistanceToNow(parseISO(timestamp))} ago`

    return (
        <>
            <span title={timestamp}> &nbsp; <i>{timeAgo}</i> </span>
        </>
    )
}
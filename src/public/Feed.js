/**
 * [Content Component]
 * 
 * 피드
 */

import { useState } from "react";

const Feed = (props) => {
    /**
     * state가 0이면 personal feed
     * state가 1이면 company feed
     * state가 2이면 커리어북 공지사항
     */
    const [state, setState] = useState(props.state);

    return (
        <div>
            <ul>
                <li>작성자</li>
                <li>제목</li>
                <li>내용</li>
            </ul>
        </div>
    )
};

export default Feed;

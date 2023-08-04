/**
 * [Content Component]
 * 
 * 활동
 */

import { useState } from "react";

const Activity = (props) => {
    /**
     * state가 0이면 개인 주관 활동
     * state가 1이면 기업 주관 활동
     * state가 2이면 국가 주관 활동
     * state가 3이면 경력 인증 보장 활동
     * state가 4이면 커리어북에서 제공하는 활동 등등...
     * ...
     */
    const [state, setState] = useState(props.state);

    return (
        <div>
            <ul>
                <li>작성자</li>
                <li>활동명</li>
                <li>내용</li>
            </ul>
        </div>
    )
};

export default Activity;

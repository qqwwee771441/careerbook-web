/**
 * [Content Component]
 * 
 * 회원가입
 */

import { Link } from 'react-router-dom';

const SignUp = (props) => {
    return (
        <div>
            <Link to="/company">기업회원가입</Link>
            <button onClick={() => props.setState(-1)}>로그인</button>
        </div>
    )
}

export default SignUp;

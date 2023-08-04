/**
 * [Content Component]
 * 
 * 로그인
 */

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SignIn = (props) => {
    const naverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver";
        props.setState(0);
    };
    const kakaoLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
        props.setState(0);
    };
    const googleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
        props.setState(0);
    };

    return (
        <div>
            <Link to="/company">[기업로그인]</Link>
            <button onClick={() => naverLogin()}>네이버로그인</button>
            <button onClick={() => kakaoLogin()}>카카오로그인</button>
            <button onClick={() => googleLogin()}>구글로그인</button>
            <button onClick={() => props.setState(-2)}>회원가입</button>
        </div>
    )
}

export default SignIn;

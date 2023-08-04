/**
 * [Page Component]
 * 
 * Guest를 위한 페이지 틀
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const PublicPage = () => {
    /**
     * state가 0이면 서버 대기중 (로그인 상태 확인 to api of 백엔드)
     * state가 -1이면 로그인
     * state가 -2이면 회원가입
     * state가 1이면 personal page (개인 로그인 상태 확인 from 백엔드 로그인 상태)
     * state가 2이면 company page (기업 로그인 상태 확인 from 백엔드 로그인 상태)
     */
    const [state, setState] = useState(0);
    const navigate = useNavigate();
    
    const getState = () => {
        if (state === 0) {
            fetch('http://localhost:8080/api/status', {
                method: 'GET',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(response => response.json())
                .then(data => {
                    if (data == 1) {
                        navigate('/personal');
                    }
                    else if (data == 2) {
                        navigate('/company');
                    }
                    else {
                        setState(-1);
                    }
                });
        }
    };

    useEffect(() => getState(), [state]);

    return (
        <div>
            {
                state === -1
                ? <SignIn setState={setState} />
                : state === -2
                ? <SignUp setState={setState} />
                : null
            }
        </div>
    )
};

export default PublicPage;

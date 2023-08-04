/**
 * [Page Component]
 * 
 * 1. 사용자가 <개인 로그인> 수행
 * 2. "개인 페이지" 출력
 * 
 * PersonalPage는 "개인 페이지"의 틀
 * - PersonalPage는 content 부분은 비어있음
 * - 해당 content부분에만 다른 파일의 component 호출
 */

import { Link } from 'react-router-dom';
import { useState } from "react";
import CompanyElement from '../company/CompanyElement';
import Feed from '../public/Feed';
import Activity from '../public/Activity';
import PersonalProfile from './PersonalProfile';

const PersonalPage = () => {
    const [state, setState] = useState('home');

    const logout = () => {
        window.location.href = "http://localhost:8080/logout";
    };

    return (
        <div>
            <h1>커리어북</h1>
            <nav>
                <button onClick={() => setState('home')}>홈</button>
                <button onClick={() => setState('profile')}>프로필</button>
                <button onClick={() => setState('company')}>구인회사</button>
                <button onClick={() => setState('career')}>커리어성장</button>
                <button onClick={() => logout()}>로그아웃</button>
            </nav>
            <section>
                {
                /**
                 * contents
                 * 다른 파일의 component 호출
                 * 아래는 예시
                 */
                }
                {(() => {
                    switch (state) {
                        case 'home':
                            return <Feed />
                        case 'profile':
                            return <PersonalProfile />
                        case 'company':
                            return <CompanyElement />
                        case 'career':
                            return <Activity />
                    }
                })()}
            </section>
            <aside>
                {/**
                 * suggestions for personal
                 */}
            </aside>
        </div>
    )
};

export default PersonalPage;

/**
 * [Page Component]
 * 
 * 1. 사용자가 <기업 로그인> 수행
 * 2. "기업 페이지" 출력
 * 
 * CompanyPage는 "기업 페이지"의 틀
 * - ComapanyPage는 content 부분은 비어있음
 * - 해당 content부분에만 다른 파일의 component 호출
 */

import { Link } from 'react-router-dom';
import { useState } from "react";
import PersonalElement from '../personal/PersonalElement';
import Feed from '../public/Feed';
import CompanyProfile from './CompanyProfile';

const CompanyPage = () => {
    const [state, setState] = useState('home');

    return (
        <div>
            <h1>커리어북</h1>
            <nav>
                <button onClick={() => setState('home')}>홈</button>
                <button onClick={() => setState('profile')}>프로필</button>
                <button onClick={() => setState('company')}>구인회사</button>
                <Link to="/public">로그아웃</Link>
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
                            return <CompanyProfile />
                        case 'company':
                            return <PersonalElement />
                    }
                })()}
            </section>
            <aside>
                {/**
                 * suggestions for company
                 */}
            </aside>
        </div>
    )
};

export default CompanyPage;

/**
 * [Content Component]
 * 
 * 1. 개인 사용자가 <프로필> 클릭
 * 2. "개인 프로필" 출력
 * 
 * PersonalProfile은 PersonalPage의 content영역에 들어갈 수 있는 한 요소
 */

const PersonalProfile = () => {
    return (
        <div>
            <ul>
                <li>이름</li>
                <li>생년월일</li>
                <li>학력</li>
                <li>경력</li>
                <li>...</li>
            </ul>
        </div>
    )
};

export default PersonalProfile;

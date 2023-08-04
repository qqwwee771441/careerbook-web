/**
 * [Content Component]
 * 
 * 1. 기업 사용자가 <프로필> 클릭
 * 2. "기업 프로필" 출력
 * 
 * CompanyProfile은 CompanyPage의 content영역에 들어갈 수 있는 한 요소
 */

const CompanyProfile = () => {
    return (
        <div>
            <ul>
                <li>기업명</li>
                <li>사업자등록번호</li>
                <li>기업분류</li>
                <li>연봉정보</li>
                <li>...</li>
            </ul>
        </div>
    )
};

export default CompanyProfile;

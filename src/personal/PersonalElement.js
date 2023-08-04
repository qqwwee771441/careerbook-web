/**
 * [Content Component]
 * 
 * 1. 구인 회사가 <구직자 리스트>를 클릭
 * 2. "구직자 리스트" 출력
 * 
 * PersonalElement는 "구직자 리스트"의 한 요소
 * 예시 형태)
 * -------------------------------------------
 * | 구직자명                                 |
 * | 구직자정보                               |
 * -------------------------------------------
 */

const PersonalElement = () => {
    return (
        <div>
            <h3>구직자명</h3>
            <p>구직자정보</p>
        </div>
    )
};

export default PersonalElement;

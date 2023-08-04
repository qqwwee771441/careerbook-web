/**
 * [Content Component]
 * 
 * 1. 구직자가 <구인중인 회사 리스트>를 클릭
 * 2. "구인 회사 리스트" 출력
 * 
 * CompanyElement는 "구인 회사 리스트"의 한 요소
 * 예시 형태)
 * -------------------------------------------
 * | 회사명                                   |
 * | 회사정보                                 |
 * -------------------------------------------
 */

const CompanyElement = () => {
    return (
        <div>
            <h3>회사명</h3>
            <p>회사정보</p>
        </div>
    )
};

export default CompanyElement;

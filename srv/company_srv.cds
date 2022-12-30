using h.company from '../db/company';

// 서비스정의 : 서비스 이름 {서비스 내용} 
service CompanyService{
    // as projection on :2 Request를 그대로 사용한다는 의미.
    entity Company as projection on company.Company;
    
}
namespace h.company;

// 테이블 명 & 컬럼 정의
entity Company {
    key comcode              : String @title     : '업체 코드';
        comname              : String @title     : '업체 명';
        comaddress           : String @title    : '업체주소';
        comperson            : String @title     : '담당자';
        comcontact           : String @title     : '담당자 연락처';
        comgood              : String @title     : '거래 품목';
        comdate              : String @title     : '업체 등록일';
        comstate             : String @title    : '신용상태';
    };

entity Company_State {
    key 
        state_key           : String @title     : '신용상태 키워드';
        state_name           : String @title     : '신용상태 한국어';
    };


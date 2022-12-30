namespace h.journal;

// 테이블 명 & 컬럼 정의
entity Document {
    key fiscal_year             : String @title     : '회계연도';
    key company_code            : String @title     : '회사 코드';
    key journal_entry           : String @title     : '전표 번호';
        journal_entry_type      : String @title     : '전표 유형';
        je_create_by            : String @title     : '전표 생성일';
        posting_date            : Date   @title     : '전기일';
        company_code_currency   : String @title     : '회사 코드 통화';
        header_text             : String @title     : '헤더 텍스트';
        reference               : String @title     : '참조';
        period                  : Integer@title     : '기간';
        journal_entry_date      : Date   @title     : '전표 입력일';
        ledger_group            : String @title     : '원장 그룹';
    };

entity Journal_Entry_Type {
    key journal_entry_type      : String @title     : '전표 유형';
        jrn_ent_type_name       : String @title     : '전표 유형 명';
    };


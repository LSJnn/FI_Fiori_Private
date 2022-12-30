using h.journal from '../db/journal';

// 서비스정의 : 서비스 이름 {서비스 내용} 
service JournalService{
    // as projection on :2 Request를 그대로 사용한다는 의미.
    entity Document as projection on journal.Document;
    entity Journal_Entry_Type as projection on journal.Journal_Entry_Type;

}
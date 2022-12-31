/* https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$filter=requestor eq '홍길동' and request_date eq '2022-09-25'

x
https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$filter=request_number in (1000000001,1000000002)

https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$filter=not endswith(requestor,'동')
https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$filter=endswith(requestor,'동')

https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$filter=request_number ge 1000000002 and request_number le 1000000005

https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$filter=request_number in (1000000002, 1000000006)



$filter=requestor eq '홍길동'&'윤희승'


https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$select=request_number&requestor

https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$orderby=requestor desc,request_number asc
https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$top=2
https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$skip=2
https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$count=true

https://port4004-workspaces-ws-qp7nv.us10.trial.applicationstudio.cloud.sap/request/Request?$search=3%20OR%204


 */


//[this. 실행컨텍스트]]

var str = 'React';

function outer(){
 console.log(`outer : ${str}`);
 console.log(`outer : ${this}`);
    function inner(){
        console.log(`inner : ${str}`);
        console.log(`inner : ${this}`);
    }
var str = 'Hello';

return inner;
}

// 객체로 함수 호출 시 = 생성자처럼. 선언만 됨.  => var str 이 할당되지 않음.
// && outer 전부 돌고  그다음에 inner 진행 (inner는 내부에 값 없을 경우 외부에서 답을 찾음)
// => outer 에서 str의 값을 찾고, this 는 가장 최상단을 참조 : 호출 객체(SetTimeOut/SetInterval의 경우 등을 가짐.)
//apply : 전역 함수 로 값을 할당하고 함수를 한번 더 실행해줌. 

var obj = {
    f: outer()
}

setTimeout(obj.f, 1000);

outer.apply({
    str:'Bye'
})



/* 
outer : undefined
VM1503:5 outer : [object Window]
VM1503:4 outer : undefined
VM1503:5 outer : [object Object]
/* inner this
 inner(){
        console.log(`inner : ${str}`);
        console.log(`inner : ${this}`);
    }
-----
    --1초뒤

VM1503:7 inner : Hello
VM1503:8 inner : [object Window] */





<table:Table
                    id="CoTable"
                    rows="{CompanyList>/CompanyList}"
                    selectionMode="MultiToggle"
                    rowSelectionChange=".eventHandler"
                    width="auto">

                    <table:extension>
                        <OverflowToolbar>
                            <Title id="TableName" text = "협력 업체 목록"/>
                            <!-- 오른쪽으로 요소 정렬 -->
                            <ToolbarSpacer/>
                            <Button
                                text="반응형 테이블"
                                type="Transparent"
                                press="onResponsive"
                            />
                            <Button
                                text="협력 업체 추가"
                                type="Transparent"
                                press="onCreateCo"
                            />
                            <Button
                                icon="sap-icon://sort"
                                type="Transparent"
                                tooltip="정렬"
                                press="onSort"
                            />
                        </OverflowToolbar>
                    </table:extension>

                    <table:columns>
                        <table:Column hAlign="Center">
                            <Label text="업체 코드"/>
                            <table:template>
                                <Text text="{CompanyList>ComNum}"/>
                                </table:template>
                        </table:Column>

                          <table:Column hAlign="Center">
                            <Label text="업체 명"/>
                            <table:template>
                                <Text text="{CompanyList>ComName}"/>
                                </table:template>
                            </table:Column>

                        <table:Column hAlign="Center" sortProperty="ComAddress" filterProperty="ComAddress" headerSpan="3">
                            <table:multiLabels>
                                <Label text="업체 기본 정보" textAlign="Center" width="100%"/>
                                <Label text="주소" textAlign="Center" width="100%"/>
                            </table:multiLabels>
                             <table:template>
                                <Text text="{CompanyList>ComAddress}"/>
                            </table:template>
                        </table:Column>  

                         <table:Column hAlign="Center" sortProperty="ComPerson" filterProperty="ComPerson" headerSpan="3">
                            <table:multiLabels>
                                <Label text="업체 기본 정보" textAlign="Center" width="100%"/>
                                <Label text="담당자" textAlign="Center" width="100%"/>
                            </table:multiLabels>
                            <table:template>
                                <Text text="{CompanyList>ComPerson}"/>
                            </table:template>
                        </table:Column>  

                         <table:Column hAlign="Center" headerSpan="3">
                            <table:multiLabels>
                                <Label text="업체 기본 정보" textAlign="Center" width="100%"/>
                                <Label text="담당자 연락처" textAlign="Center" width="100%"/>
                            </table:multiLabels>
                            <table:template>
                                <Text text="{CompanyList>ComContact}"/>
                            </table:template>
                        </table:Column>  

                        <table:Column hAlign="Center" sortProperty="Good" filterProperty="Good" headerSpan="2">
                            <table:multiLabels>
                                <Label text="업체 설명" textAlign="Center" width="100%"/>
                                <Label text="거래 품목" textAlign="Center" width="100%"/>
                            </table:multiLabels>
                           <table:template>
                                <Text text="{CompanyList>Good}"/>
                            </table:template>
                        </table:Column>  

                        <table:Column hAlign="Center" sortProperty="Date" filterProperty="Date" headerSpan="2">
                            <table:multiLabels>
                                <Label text="업체 설명" textAlign="Center" width="100%"/>
                                <Label text="업체 등록일" textAlign="Center" width="100%"/>
                            </table:multiLabels>
                          <table:template>
                                <Label text="{CompanyList>Date}"/>
                            </table:template>
                        </table:Column>  

                            <table:Column hAlign="Center">
                                <Label text="신용상태"/>
                                    <table:template>
                                        <ObjectStatus
                                        text="{
                                            path:'CompanyList>Status',
                                            formatter:'.CompanyFormatter.status'
                                        }"
                                        state="{=${CompanyList>Status}==='trust'?'Success':
                                                ${CompanyList>Status}==='caution'?'Error':
                                                'None'}" 
                                         />
                                    </table:template>
                            </table:Column>

                    </table:columns>
                  </table:Table>

// 1. 글쓰기 폼 초기 숨기기
// 2. + 버튼 클릭 시 글쓰기 폼 보이기
const writeForm = document.querySelector('#write_form');
const writeFab = document.querySelector('#write_fab');
console.log(writeForm, writeFab);

writeForm.style.display = 'none'; //1
writeFab.addEventListener('click',function(e){ //2
    e.preventDefault();
    writeForm.style.display = 'block';
})

//글쓰기 폼에 엔터 클릭 시
//폼에 할일이 없다면 '<p>입력하세요</p>' 경고 출력
//폼에 할일이 있다면 글쓰기폼 닫히고 기존 할일 목록에 목록추가하기
const writeContents = document.querySelector('#write_contents');
const confirmBtn = document.querySelector('#confirm_btn');
const errorMsg = writeForm.querySelector('.error');
console.log(writeContents, confirmBtn, errorMsg);

confirmBtn.addEventListener('click',function(){
    if(writeContents.value == ''){
        // HTML파일에 태그가 준비된 경우
        // errorMsg.style.color = '#f00';
        // errorMsg.textContent = '할일을 입력하세요';
        // HTML파일에 태그가 없고 JS에서 태그를 객체로 생성한 경우
        const errP = document.createElement('p');
        errP.innerHTML = '할일을 <em>입력하세요</em>';
        errP.style.color = '#f00';
        writeForm.appendChild(errP);
    }
    // 할일을 적은 상태일 경우
    if(writeContents.value != ''){//textarea의 값이 빈 값이 아닌 경우 참
        const allCon = document.querySelector('#all_con');//ol 선택(자식요소삽입위해)
        const li = document.createElement('li');//생성위치(클릭이벤트안)
        const dateA = document.createElement('a');//클릭할때마다 생성
        const a = document.createElement('a');//클릭할때마다 생성<a></a>

        dateA.classList.add('date');//기존css의 디자인통일을 위해서 같은이름등록
        li.classList.add('contents4');//기존 클래스와 일치해서 디자인 목적
        li.classList.add('contents');//기존 클래스와 일치해서 디자인 목적

        dateA.textContent = '04.03';//오늘 날짜 대입(문자열)
        dateA.href = '#';//a태그생성시 속성없이 기본생성<a>, href속성추가대입
        a.innerHTML = writeContents.value;//create생성한게 아닌 기존태그값을 대/입

        li.appendChild(dateA);//li부모안 마지막자식위치에 날짜A 삽입(먼저 시작하는 순서)
        li.appendChild(a);//날짜 다음 순서로 삽입하는 create객체 삽입 
        allCon.appendChild(li);//allcan > li > dateA + a

        writeForm.style.display = 'none'; //등록한 후 글쓰기팝업창 숨김
    }
})
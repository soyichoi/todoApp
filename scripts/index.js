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
    if(writeContents.value != ''){
        const allCon = document.querySelector('#all_con');
        const li = document.createElement('li');
        const dateA = document.createElement('a');
        const a = document.createElement('a');
        dateA.classList.add('date'); //클래스 넣어서 디자인 적용
        dateA.textContent = '04.03';
        dateA.href = '#';
        li.appendChild(dateA);
        a.innerHTML = writeContents.value;
        li.appendChild(a);
        li.classList.add('contents4');
        li.classList.add('contents');
        allCon.appendChild(li);
        writeForm.style.display = 'none'; //글쓰기창 닫기
    }
})
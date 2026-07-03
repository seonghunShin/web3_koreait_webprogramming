// ==========================================
// 1. DOM 요소 선택
// ==========================================
// TODO: 폼, 입력창, 리스트 컨테이너(ul), 결과 화면(div), 추첨 버튼, 초기화 버튼 선택.
const menuForm = document.getElementById('menu-form');
const menuInput = document.getElementById('menu-input');
const menuList = document.getElementById('menu-list');
const resultDisplay = document.getElementById('result-display');
const btnPick = document.getElementById('btn-pick')
const btnClear = document.getElementById('btn-clear');

// ==========================================
// 2. 상태 데이터 (localStorage 연동)
// ==========================================
// TODO: localStorage에서 'randomMenu' 데이터를 가져와 객체 배열로 초기화합니다(없으면 []).
let randomData = JSON.parse(localStorage.getItem('randomMenu')) || [];
// ==========================================
// 3. 단일 메뉴 아이템 생성 함수 (Create)
// ==========================================
function createMenuItem(menu) {
  // TODO: 1. 항목(li) 요소 생성 및 클래스('menu-item'), 고유 id(dataset.id) 부여
  const li = document.createElement('li');
  li.classList.add('menu-item');
  li.dataset.id = menu.id;
  // TODO: 2. 메뉴 이름이 들어갈 요소(span) 생성 및 텍스트 채우기
  const menuName = document.createElement('span');
  menuName.textContent = menu.name;
  // TODO: 3. 삭제 버튼(button) 생성 및 클래스('delete-btn'), 고유 id 부여
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'X';
  deleteButton.dataset.id = menu.id;
  // TODO: 4. span과 삭제 버튼을 li에 조립
  li.appendChild(menuName);
  li.appendChild(deleteButton);
  // TODO: 5. 완성된 li 요소 반환
  return li;
}

// ==========================================
// 4. 전체 목록 렌더링 함수 (Render)
// ==========================================
function renderMenu(menus) {
  // TODO: 1. 리스트 컨테이너(innerHTML)를 비웁니다.
  menuList.innerHTML = '';
  // TODO: 2. for...of 문으로 menus 배열을 순회하며 createMenuItem() 호출.
  for (const menu of menus) {
    const li = createMenuItem(menu);
    // TODO: 3. 반환된 li를 컨테이너에 추가합니다.
    menuList.appendChild(li);
  }
}

// ==========================================
// 5. 메뉴 추가 기능 (폼 제출)
// ==========================================
// TODO: 폼에 'submit' 이벤트를 달고 새로고침을 막습니다.
menuForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 새로고침 막기 (외울 것)
    // TODO: 입력창의 값이 빈 문자열이면 리턴하고, 값이 있으면 객체({ id, name })로 만들어 배열에 추가합니다.
    const randomMenuName = menuInput.value.trim();
    const newMenu = {
        id : Date.now(),
        name : randomMenuName
    }
    randomData.push(newMenu);
    // TODO: localStorage 저장 후 입력창을 비우고 renderMenu()를 실행합니다.
    localStorage.setItem('randomMenu', JSON.stringify(randomData));
    menuInput.value = '';
    renderMenu(randomData);
})

// ==========================================
// 6. 메뉴 삭제 기능 (이벤트 위임)
// ==========================================
// TODO: 리스트 컨테이너에 'click' 이벤트를 답니다.
menuList.addEventListener('click', (event) => {
    // TODO: 클릭된 게 '삭제 버튼'이면 dataset.id를 이용해 배열에서 제거합니다.
    if (event.target.classList.contains('delete-btn')) {
        const targetId = Number(liElement.dataset.id);
        randomData = randomData.filter(menu => menu.id !== targetId);
        localStorage.setItem('randomMenu', JSON.stringify(randomData));
        renderMenu(randomData);
    }
})


// ==========================================
// 7. 추첨 및 초기화
// ==========================================
// TODO: '추첨하기' 버튼 클릭 시: 배열이 비어있으면 alert 띄우고, 데이터가 있으면 Math.random()으로 뽑아 결과 화면에 표시합니다.
btnPick.addEventListener('click', (event) => {
    if (randomData === []) {
        alert('메뉴 후보가 등록되어있지 않습니다.');
    } else {
        const randomNumber = Math.floor(Math.random() * randomData.length);
        resultDisplay.textContent = randomData[randomNumber].name;
    }
})
// TODO: '초기화' 버튼 클릭 시: 배열을 비우고 localStorage도 비운 뒤, 결과 화면과 리스트를 초기화합니다.
btnClear.addEventListener('click', () => {
    randomData = [];
    localStorage.setItem('randomMenu', JSON.stringify(randomData));
    resultDisplay.textContent = '메뉴를 추가하고 추첨을 시작하세요!';
    renderMenu(randomData);
    alert('초기화가 완료되었습니다.');
})

window.addEventListener('DOMContentLoaded', () => {
    renderMenu(randomData);
});
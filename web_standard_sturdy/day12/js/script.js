// ==========================================
// 1. DOM 요소 선택
// ==========================================
const bucketForm = document.getElementById('bucket-form');
const bucketCategory = document.getElementById('bucket-category');
const bucketInput = document.getElementById('bucket-input');
const searchInput = document.getElementById('search-input');
const bucketListContainer = document.getElementById('bucket-list');

// ==========================================
// 2. 상태 데이터 (localStorage 연동)
// ==========================================
let bucketData = JSON.parse(localStorage.getItem('myBucketList')) || [];

// ==========================================
// 3. 단일 리스트 아이템 생성 함수 (Create)
// ==========================================
function createBucketItem(item) {
  const li = document.createElement('li');
  li.classList.add('bucket-item');
  li.dataset.id = item.id;
  
  if (item.done) {
    li.classList.add('done');
  }

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('item-content');
  
  const badge = document.createElement('span');
  badge.classList.add('category-badge');
  badge.textContent = item.category;

  const textSpan = document.createElement('span');
  textSpan.classList.add('item-text');
  textSpan.textContent = item.text;

  contentDiv.appendChild(badge);
  contentDiv.appendChild(textSpan);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = '삭제';
  deleteButton.dataset.id = item.id;

  li.appendChild(contentDiv);
  li.appendChild(deleteButton);

  return li;
}

// ==========================================
// 4. 전체 목록 렌더링 함수 (Render)
// ==========================================
function renderBucketList(items) {
  bucketListContainer.innerHTML = '';

  if (items.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.classList.add('empty-msg');
    emptyLi.textContent = '버킷리스트가 비어있습니다.';
    bucketListContainer.appendChild(emptyLi);
    return;
  }

  for (const item of items) {
    const li = createBucketItem(item);
    bucketListContainer.appendChild(li);
  }
}

// ==========================================
// 5. 폼 제출 이벤트 (추가)
// ==========================================
bucketForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newItem = {
    id: Date.now(),
    text: bucketInput.value,
    category: bucketCategory.value,
    done: false
  };

  bucketData.push(newItem);
  localStorage.setItem('myBucketList', JSON.stringify(bucketData));

  filterAndRender();
  bucketInput.value = '';
});

// ==========================================
// 6. 삭제 및 완료 토글 (이벤트 위임)
// ==========================================
bucketListContainer.addEventListener('click', (event) => {
  const liElement = event.target.closest('.bucket-item');

  const targetId = Number(liElement.dataset.id);

  if (event.target.classList.contains('delete-btn')) {
    bucketData = bucketData.filter(item => item.id !== targetId);
  } else {
    bucketData = bucketData.map(item => {
      if (item.id === targetId) {
        return { ...item, done: !item.done };
      }
      return item;
    });
  }

  localStorage.setItem('myBucketList', JSON.stringify(bucketData));
  renderBucketList(bucketData);
});

// ==========================================
// 7. 검색 기능 및 초기화
// ==========================================
function filterAndRender() {
  const keyword = searchInput.value.trim().toLowerCase();
  sessionStorage.setItem('bucketSearchKeyword', keyword);

  const filteredData = bucketData.filter(item => 
    item.text.toLowerCase().includes(keyword) ||
    item.category.includes(keyword)
  );

  renderBucketList(filteredData);
}

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    filterAndRender();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedKeyword = sessionStorage.getItem('bucketSearchKeyword') || '';
  searchInput.value = savedKeyword;
  filterAndRender();
});
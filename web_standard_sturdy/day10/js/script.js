// const nameInput = document.getElementById('name-input');
// const nameResult = document.getElementById('name-result');

// nameInput.addEventListener('input', (event) => {
//     const inputValue = event.target.value.trim();
//     if (inputValue === '') {
//         nameResult.textContent = '이름을 입력하세요';
//         nameResult.classList.add('error');
//         nameResult.classList.remove('success');
//     } else {
//         nameResult.textContent = inputValue;
//         nameResult.classList.add('success');
//         nameResult.classList.remove('remove');
//     }
// })



// const nameInput = document.getElementById('name-input');
// const nameResult = document.getElementById('name-result');

// nameInput.addEventListener('change', (event) => {
//     console.log(`변경된 값: ${event.target.value}`);
// })


// const nameInput = document.getElementById('name-input');
// const nameResult = document.getElementById('name-result');
// // keyup, keydown
// // nameInput.addEventListener('keyup', (event) => {
// //     console.log(`누른 키 ${event.key}`);
// // })
// nameInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         console.log('엔터키를 눌렀습니다.')
//     }
// })



// const productForm = document.getElementById('product-form');

// productForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('폼 제출');
// })


// createProductCard 함수를 만들어 주세요
// 해당 함수는 product 라는 제품 객체를 매개변수로 받아 옵니다
function createProductCard(products) {
    const productList = document.getElementById('product-list');

    // 함수 안
    // article 태그를 하나 만든다 변수명: card
    // 해당 article에 product-card라는 클래스를 추가
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.dataset.id = products.id;

    //h3 태그를 하나 만들고 변수명: title
    // 해당 h3 text에 매개변수 product의 name을 넣어 주세요
    const productTitle = document.createElement('h3');
    productTitle.textContent = products.name;

    // p 태그를 하나 만들고 변수명 price
    // 해당 p text에 매개변수 product의 price를 넣어 주세요
    const productPrice = document.createElement('p');
    productPrice.textContent = products.price;

    // button을 하나 만들고 변수명 deleteButton
    // type button
    // text 삭제
    // 클래스는 delete-button

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete-button');
    deleteButton.dataset.id = products.id;

    // card에 title, price, deletButton 추가해주세요.
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(deleteButton);

    // card return
    return productCard;
}

// renderProducts 함수를 만들어 주세요 list형태의 products라는 매개변수 가정
// 해당 함수는 product-list 라는 id를 가진 요소 <id  = 'product-list'>
// get~~
// const productList = 라는 변수에 담기
// 반복문
// 매개변수 products를 반복문을 돌리면서
// 위에 만들어 둔 createProductCard 함수를 호출
// createProductCard return 값이 있음 card 관련 html 정보를
// productList 에다가 append 하기

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    for(const product of products) {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    }
}

let products = [
    {id: 1, name: '기계식 키보드', price: 89000},
    {id: 2, name: '무선 마우스', price: 39000},
    {id: 3, name: '27인치 모니터', price: 240000}
];

renderProducts(products);

const productList = document.getElementById('product-list');

productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const productId = Number(event.target.dataset.id);
        products = products.filter((product) => product.id !== productId);
        renderProducts(products);
    }
})

const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const formMessage = document.getElementById('form-message');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const productname = productNameInput.value.trim();
    const productPrice = Number(productPriceInput.value);

    // 예외처리 생략

    const newProduct = {
        id: Date.now(),
        name: productname,
        price: productPrice
    }

    products.push(newProduct);
    renderProducts(products);

    formMessage.textContent = '상품이 추가되었습니다.';
    formMessage.classList.add('success');
    formMessage.classList.add('error');

    productForm.reset();
})

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (event) => {
    const keyword = event.target.value.trim().toLowerCase();

    const filterdProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(keyword);
    })

    renderProducts(filterdProducts);
})

// 엔터 쳤을 때

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const keyword = event.target.value.trim().toLowerCase();

    const filterdProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(keyword);
    })

    renderProducts(filterdProducts);
  }
});
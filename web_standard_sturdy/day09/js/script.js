// const maintTitle = document.querySelector('#main-title');
// const desc = document.querySelectorAll('.info-text');

// const descSecond = desc[1]

// descSecond.textContent = '두번째는 변경되었다'

// for(const infoText of desc) {
//     infoText.textContent = '반복문으로 변경해버리기';
// }

// for(const infoText of desc) {
//     infoText.classList.add('highlight');
// }

// const userNameInput = document.getElementById('user-name');

// console.log(userNameInput.value);

// userNameInput.value = '성훈';

// console.log(userNameInput.getAttribute('type'));
// userNameInput.setAttribute('placeholder', '이름입력하세요')
// userNameInput.removeAttribute('value');

// const targetText = document.getElementById('target-text');

// targetText.classList.add('success');

// const newP = document.createElement('p');

// const productList = document.getElementById('product-list');
// newP.textContent = '새로운 문단을 만들어 냈습니다.';
// productList.appendChild(newP);

// // <article></article>
// const card = document.createElement('article');

// // <article class='product-card'></article>
// card.classList.add('product-card');

// // <h3></h3>
// const title = document.createElement('h3');

// // <h3>무선키보드</h3>
// title.textContent = '무선키보드';

// // <p></p>
// const price = document.createElement('p');

// // <p>가격: 89,000원</p>
// price.textContent = '가격: 89,000원';

// // <artlcle class='product-card'>
// //      <h3>무선 키보드</h3>
// //      <p>가격: 89,000원<p>
// // </article>
// card.appendChild(title);
// card.appendChild(price);

// // <div id="product-list" class="product-list">
// //  <artlcle class='product-card'>
// //      <h3>무선 키보드</h3>
// //      <p>가격: 89,000원<p>
// //  </article>
// // <div>
// productList.appendChild(card);

// 문서객체모델1 - 19번으로 오시면 됩니다.
function createProductCard(product) {

    const productList = document.getElementById('product-list');

    // article 태그 하나 만들어서 product-card 클래스 추가하기
    const card = document.createElement('article');
    card.classList.add('product-card');

    // h3 태그 하나 만들어서 위 product의 name 가져와서 넣기
    const title = document.createElement('h3');
    title.textContent = product.name;

    // p 태그 하나 만들어서 위 product의 price 가져와서 넣기
    const price = document.createElement('p');
    price.textContent = product.price;

    // p 태그 하나 만들어서 위 product의 stockCount 가져와서 넣기
    const count = document.createElement('p');
    count.textContent = product.stockCount;

    // productStatus 라는 변수명에다가 p 태그 만들어서 넣기
    // (값은 아래에서 지정)
    const productStatus = document.createElement('p');

    // 조건식
    // 만약에 product의 stockCount가 0보다 크다면
    // p 태그인 productStatus의 text를 '판매중' 으로 바꾸고
    // 클래스는 success 넣기
    if(product.stockCount > 0) {
        productStatus.textContent = '판매중';
        productStatus.classList.add('success');
    }

    // 아니라면 
    // p 태그인 productStatus의 text를 '품절'로 바꾸고
    // 클래스는 highlight, sold-out 넣기(하나씩 넣으면 됨)
    else {
        productStatus.textContent = '품절';
        productStatus.classList.add('sold-out');
    }

    

    // 이후 article 태그에다가 위 h3, p 태그들 순서대로 넣기
    // productList div에다가 article 태그 넣기
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(count);
    card.appendChild(productStatus);

    const productSale = document.createElement('span');
    if(product.isOnSale) {
        productSale.textContent = '할인 중!';
        productSale.classList.add('sale-badge');
        card.appendChild(productSale);
    }

    return card;
}


function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    for (const product of products) {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    }
}

// function renderProductsWithInnerHTML(products) {
//     const productList = document.getElementById('product-list');

//     productList.innerHTML = products.map((product) => {
//         const statusText = product.stockCount > 0 ? '판매중' : '품절';
//         const statusClass = product.stockCount > 0 ? 'success' : 'highlight';
//         const cardClass = product.stockCount > 0 ? 'product-card' : 'product-card sold-out';

//         return `
//         <article class="${cardClass}">
//             <h3>${product.name}</h3>
//             <p>가격: ${product.price.toLocaleString()}원</p>
//             <p>재고: ${product.stockCount}개</p>
//             <p class="${statusClass}">${statusText}</p>
//         </article>
//         `;
//     }).join('');
// }

const products = [
    {id: 1, name: '기계식 키보드', price: 89000, stockCount: 10, isOnSale: true},
    {id: 2, name: '무선 마우스', price: 39000, stockCount: 0, isOnSale: false},
    {id: 3, name: '27인치 모니터', price: 240000, stockCount: 5, isOnSale: true},
    {id: 4, name: 'USB 허브', price: 25000, stockCount: 15, isOnSale: false}
];

renderProducts(products);
// 기존에 작성하셨던 상품 카드 만드는 로직을 함수화 하는것 createProductCard
// 해당 함수가 완성되었다면 아래 renderProducts를 만들고 합쳐보는 시간 
// createProductCard는 기존 코드를 다 쓰는게 아님.
const menuGrid = document.getElementById('menu-grid');
const template = document.getElementById('menu-card-template');

const menuItems = [
  {
    "id": "cof_001",
    "category": "coffee",
    "name_ko": "카페 아메리카노",
    "name_en": "Caffe Americano",
    "name_easy": "따뜻한 블랙커피",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "./assets/americano.jpg" 
  },
  {
    "id": "cof_002",
    "category": "coffee",
    "name_ko": "카페 라떼",
    "name_en": "Caffe Latte",
    "name_easy": "부드러운 우유 커피",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "./assets/latte.jpg"
  },
  {
    "id": "cof_003",
    "category": "coffee",
    "name_ko": "카라멜 마키아또",
    "name_en": "Caramel Macchiato",
    "name_easy": "달콤한 카라멜 커피",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "./assets/caramel_macchiato.jpg"
  },
  {
    "id": "cof_004",
    "category": "coffee",
    "name_ko": "카푸치노",
    "name_en": "Cappuccino",
    "name_easy": "거품이 많은 우유 커피",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "./assets/cappuccino.jpg"
  },
  {
    "id": "cof_005",
    "category": "coffee",
    "name_ko": "화이트 초콜릿 모카",
    "name_en": "White Chocolate Mocha",
    "name_easy": "달콤한 화이트 초코 커피",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "./assets/white_choco_mocha.jpg"
  },
  {
    "id": "cb_001",
    "category": "cold_brew",
    "name_ko": "콜드 브루",
    "name_en": "Cold Brew",
    "name_easy": "차가운 블랙커피",
    "price": 4900,
    "isSoldOut": false,
    "image_url": "./assets/cold_brew.jpg"
  },
  {
    "id": "cb_002",
    "category": "cold_brew",
    "name_ko": "돌체 콜드 브루",
    "name_en": "Dolce Cold Brew",
    "name_easy": "달콤한 연유 차가운 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "./assets/dolce_cold_brew.jpg"
  },
  {
    "id": "fra_001",
    "category": "frappuccino",
    "name_ko": "자바 칩 프라푸치노",
    "name_en": "Java Chip Frappuccino",
    "name_easy": "초코칩 얼음 음료",
    "price": 6300,
    "isSoldOut": false,
    "image_url": "./assets/javachip_frap.jpg"
  },
  {
    "id": "fra_002",
    "category": "frappuccino",
    "name_ko": "제주 말차 크림 프라푸치노",
    "name_en": "Jeju Malcha Cream Frappuccino",
    "name_easy": "시원한 녹차 얼음 음료",
    "price": 6300,
    "isSoldOut": true,
    "image_url": "./assets/malcha_frap.jpg"
  },
  {
    "id": "ble_001",
    "category": "blended",
    "name_ko": "딸기 딜라이트 요거트 블렌디드",
    "name_en": "Strawberry Delight Yogurt Blended",
    "name_easy": "상큼한 딸기 요거트 얼음 음료",
    "price": 6300,
    "isSoldOut": false,
    "image_url": "./assets/strawberry_yogurt.jpg"
  },
  {
    "id": "ble_002",
    "category": "blended",
    "name_ko": "망고 바나나 블렌디드",
    "name_en": "Mango Banana Blended",
    "name_easy": "달콤한 망고 바나나 주스",
    "price": 6300,
    "isSoldOut": false,
    "image_url": "./assets/mango_banana.jpg"
  },
  {
    "id": "tea_001",
    "category": "tea",
    "name_ko": "자몽 허니 블랙 티",
    "name_en": "Grapefruit Honey Black Tea",
    "name_easy": "달콤한 자몽 홍차",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "./assets/grapefruit_tea.jpg"
  },
  {
    "id": "tea_002",
    "category": "tea",
    "name_ko": "시그니처 핫 초콜릿",
    "name_en": "Signature Hot Chocolate",
    "name_easy": "따뜻한 핫초코",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "./assets/hot_chocolate.jpg"
  },
  {
    "id": "tea_003",
    "category": "tea",
    "name_ko": "유자 민트 티",
    "name_en": "Yuza Mint Tea",
    "name_easy": "상큼한 유자 박하차",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "./assets/yuza_mint_tea.jpg"
  },
  {
    "id": "tea_004",
    "category": "tea",
    "name_ko": "제주 유기농 말차로 만든 라떼",
    "name_en": "Jeju Organic Malcha Latte",
    "name_easy": "따뜻한 녹차 우유",
    "price": 6100,
    "isSoldOut": false,
    "image_url": "./assets/malcha_latte.jpg"
  },
  {
    "id": "fiz_001",
    "category": "fizzio",
    "name_ko": "쿨 라임 피지오",
    "name_en": "Cool Lime Starbucks Fizzio",
    "name_easy": "시원한 라임 톡톡 쏘는 음료",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "./assets/cool_lime.jpg"
  },
  {
    "id": "fiz_002",
    "category": "fizzio",
    "name_ko": "블랙 티 레모네이드 피지오",
    "name_en": "Black Tea Lemonade Starbucks Fizzio",
    "name_easy": "상큼한 레몬 홍차 톡톡 쏘는 음료",
    "price": 5400,
    "isSoldOut": true,
    "image_url": "./assets/black_tea_lemonade.jpg"
  },
  {
    "id": "des_001",
    "category": "dessert",
    "name_ko": "클라우드 치즈 케이크",
    "name_en": "Cloud Cheese Cake",
    "name_easy": "구름처럼 부드러운 치즈 케이크",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "./assets/cheese_cake.jpg"
  },
  {
    "id": "des_002",
    "category": "dessert",
    "name_ko": "하트 파이",
    "name_en": "Heart Pie",
    "name_easy": "바삭한 하트모양 과자",
    "price": 3200,
    "isSoldOut": false,
    "image_url": "./assets/heart_pie.jpg"
  },
  {
    "id": "des_003",
    "category": "dessert",
    "name_ko": "부드러운 생크림 카스텔라",
    "name_en": "Fresh Cream Castella",
    "name_easy": "크림이 든 폭신한 둥근 빵",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "./assets/cream_castella.jpg"
  },
  {
    "id": "des_004",
    "category": "dessert",
    "name_ko": "다크 초콜릿 마카롱",
    "name_en": "Dark Chocolate Macaron",
    "name_easy": "달콤하고 쫀득한 초코 과자",
    "price": 2700,
    "isSoldOut": false,
    "image_url": "./assets/choco_macaron.jpg"
  },
  {
    "id": "food_001",
    "category": "food",
    "name_ko": "베이컨 치즈 토스트",
    "name_en": "Bacon Cheese Toast",
    "name_easy": "짭짤한 베이컨 치즈 구운 빵",
    "price": 4900,
    "isSoldOut": false,
    "image_url": "./assets/bacon_cheese_toast.jpg"
  },
  {
    "id": "food_002",
    "category": "food",
    "name_ko": "크로크무슈",
    "name_en": "Croque Monsieur",
    "name_easy": "햄과 치즈가 든 따뜻한 식빵",
    "price": 4600,
    "isSoldOut": false,
    "image_url": "./assets/croque_monsieur.jpg"
  }
];

function renderMenu(items) {
    menuGrid.innerHTML = ''; // 화면 초기화
    
    items.forEach(item => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.menu-card');
        const img = clone.querySelector('.menu-img');
        
        img.src = item.image_url;
        img.alt = item.name_ko;
        clone.querySelector('.menu-name').textContent = item.name_ko;
        clone.querySelector('.menu-price').textContent = `${item.price.toLocaleString('ko-KR')}원`;

        if (item.isSoldOut) {
            card.classList.add('sold-out');
        }

        card.addEventListener('click', () => {
            if (item.isSoldOut) {
                alert('품절된 상품입니다.');
                return;
            }
            console.log(`장바구니 담기 성공: ${item.name_ko}`); 
        });

        menuGrid.appendChild(clone);
    });
}

categoryBtns.forEach(btn => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    
});

renderMenu(menuItems);
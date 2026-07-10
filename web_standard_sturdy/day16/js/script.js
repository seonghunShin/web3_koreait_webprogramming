const menuGrid = document.getElementById('menu-grid');
const template = document.getElementById('menu-card-template');
const cartTemplate = document.getElementById('cart-card-template');
const categoryBtns = document.querySelectorAll('.category-btn');
const shoppingBtn = document.querySelector('.shopping-btn');

const menuItems = [
  {
    "id": "cof_001",
    "category": "coffee",
    "name_ko": "에스프레소",
    "name_en": "Espresso",
    "name_easy": "진한 한 잔의 커피",
    "price": 3500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_002",
    "category": "coffee",
    "name_ko": "더블 에스프레소",
    "name_en": "Double Espresso",
    "name_easy": "에스프레소 두 잔",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_003",
    "category": "coffee",
    "name_ko": "리스트레토",
    "name_en": "Ristretto",
    "name_easy": "짧고 진한 에스프레소",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_004",
    "category": "coffee",
    "name_ko": "룽고",
    "name_en": "Lungo",
    "name_easy": "물을 더 내려 부드러운 에스프레소",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_005",
    "category": "coffee",
    "name_ko": "에스프레소 마키아토",
    "name_en": "Espresso Macchiato",
    "name_easy": "우유 거품을 올린 에스프레소",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_006",
    "category": "coffee",
    "name_ko": "에스프레소 콘파냐",
    "name_en": "Espresso Con Panna",
    "name_easy": "휘핑크림을 올린 에스프레소",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_007",
    "category": "coffee",
    "name_ko": "카페 아메리카노",
    "name_en": "Caffe Americano",
    "name_easy": "따뜻한 블랙커피",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_008",
    "category": "coffee",
    "name_ko": "아이스 아메리카노",
    "name_en": "Iced Americano",
    "name_easy": "차가운 블랙커피",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1471922597728-92f81bfe2445?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_009",
    "category": "coffee",
    "name_ko": "디카페인 아메리카노",
    "name_en": "Decaf Americano",
    "name_easy": "카페인을 줄인 블랙커피",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_010",
    "category": "coffee",
    "name_ko": "아이스 디카페인 아메리카노",
    "name_en": "Iced Decaf Americano",
    "name_easy": "차갑고 카페인을 줄인 블랙커피",
    "price": 5300,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1471922597728-92f81bfe2445?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_011",
    "category": "coffee",
    "name_ko": "카페라떼",
    "name_en": "Caffe Latte",
    "name_easy": "우유가 들어간 부드러운 커피",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_012",
    "category": "coffee",
    "name_ko": "아이스 카페라떼",
    "name_en": "Iced Caffe Latte",
    "name_easy": "차가운 우유 커피",
    "price": 5300,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_013",
    "category": "coffee",
    "name_ko": "카푸치노",
    "name_en": "Cappuccino",
    "name_easy": "우유 거품이 풍성한 커피",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1720214931419-7cb11ee42c59?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_014",
    "category": "coffee",
    "name_ko": "플랫 화이트",
    "name_en": "Flat White",
    "name_easy": "진한 에스프레소와 얇은 우유 거품",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1720214931419-7cb11ee42c59?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_015",
    "category": "coffee",
    "name_ko": "코르타도",
    "name_en": "Cortado",
    "name_easy": "에스프레소와 따뜻한 우유를 반씩 넣은 커피",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1753069490867-06d52f5342ba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_016",
    "category": "coffee",
    "name_ko": "카페오레",
    "name_en": "Cafe au Lait",
    "name_easy": "드립커피에 따뜻한 우유를 넣은 커피",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_017",
    "category": "coffee",
    "name_ko": "바닐라 라떼",
    "name_en": "Vanilla Latte",
    "name_easy": "바닐라 향이 달콤한 우유 커피",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_018",
    "category": "coffee",
    "name_ko": "아이스 바닐라 라떼",
    "name_en": "Iced Vanilla Latte",
    "name_easy": "차가운 바닐라 우유 커피",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_019",
    "category": "coffee",
    "name_ko": "헤이즐넛 라떼",
    "name_en": "Hazelnut Latte",
    "name_easy": "고소한 헤이즐넛 향의 우유 커피",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_020",
    "category": "coffee",
    "name_ko": "카라멜 라떼",
    "name_en": "Caramel Latte",
    "name_easy": "카라멜이 들어간 달콤한 우유 커피",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_021",
    "category": "coffee",
    "name_ko": "카라멜 마키아토",
    "name_en": "Caramel Macchiato",
    "name_easy": "카라멜 소스를 올린 달콤한 커피",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_022",
    "category": "coffee",
    "name_ko": "카페모카",
    "name_en": "Caffe Mocha",
    "name_easy": "초콜릿이 들어간 우유 커피",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_023",
    "category": "coffee",
    "name_ko": "화이트 초콜릿 모카",
    "name_en": "White Chocolate Mocha",
    "name_easy": "화이트초콜릿이 들어간 달콤한 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_024",
    "category": "coffee",
    "name_ko": "민트 모카",
    "name_en": "Mint Mocha",
    "name_easy": "민트와 초콜릿 향의 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_025",
    "category": "coffee",
    "name_ko": "시나몬 라떼",
    "name_en": "Cinnamon Latte",
    "name_easy": "계피 향이 은은한 우유 커피",
    "price": 5600,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_026",
    "category": "coffee",
    "name_ko": "메이플 라떼",
    "name_en": "Maple Latte",
    "name_easy": "메이플 시럽이 들어간 우유 커피",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_027",
    "category": "coffee",
    "name_ko": "연유 라떼",
    "name_en": "Condensed Milk Latte",
    "name_easy": "연유가 들어간 진하고 달콤한 커피",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_028",
    "category": "coffee",
    "name_ko": "흑당 라떼",
    "name_en": "Brown Sugar Latte",
    "name_easy": "흑당 시럽이 들어간 달콤한 커피",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_029",
    "category": "coffee",
    "name_ko": "돌체 라떼",
    "name_en": "Dolce Latte",
    "name_easy": "달콤한 연유 풍미의 라떼",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_030",
    "category": "coffee",
    "name_ko": "아인슈페너",
    "name_en": "Einspanner",
    "name_easy": "크림을 올린 진한 블랙커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_031",
    "category": "coffee",
    "name_ko": "아이스 아인슈페너",
    "name_en": "Iced Einspanner",
    "name_easy": "차가운 커피 위에 크림을 올린 음료",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_032",
    "category": "coffee",
    "name_ko": "비엔나커피",
    "name_en": "Vienna Coffee",
    "name_easy": "휘핑크림을 올린 부드러운 커피",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_033",
    "category": "coffee",
    "name_ko": "아포가토",
    "name_en": "Affogato",
    "name_easy": "바닐라 아이스크림에 에스프레소를 부은 디저트 커피",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_034",
    "category": "coffee",
    "name_ko": "샤케라토",
    "name_en": "Shakerato",
    "name_easy": "에스프레소를 얼음과 흔든 차가운 커피",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_035",
    "category": "coffee",
    "name_ko": "에스프레소 토닉",
    "name_en": "Espresso Tonic",
    "name_easy": "토닉워터에 에스프레소를 더한 청량한 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_036",
    "category": "coffee",
    "name_ko": "오렌지 커피",
    "name_en": "Orange Coffee",
    "name_easy": "오렌지와 에스프레소를 섞은 상큼한 커피",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1673846685646-675aca3b2d11?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_037",
    "category": "coffee",
    "name_ko": "코코넛 라떼",
    "name_en": "Coconut Latte",
    "name_easy": "코코넛 향이 부드러운 우유 커피",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_038",
    "category": "coffee",
    "name_ko": "피스타치오 라떼",
    "name_en": "Pistachio Latte",
    "name_easy": "피스타치오의 고소함을 더한 커피",
    "price": 6300,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_039",
    "category": "coffee",
    "name_ko": "아몬드 라떼",
    "name_en": "Almond Latte",
    "name_easy": "아몬드 향을 더한 고소한 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_040",
    "category": "coffee",
    "name_ko": "오트 라떼",
    "name_en": "Oat Latte",
    "name_easy": "귀리 음료로 만든 부드러운 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_041",
    "category": "coffee",
    "name_ko": "콜드브루",
    "name_en": "Cold Brew",
    "name_easy": "찬물로 오래 추출한 부드러운 커피",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_042",
    "category": "coffee",
    "name_ko": "콜드브루 라떼",
    "name_en": "Cold Brew Latte",
    "name_easy": "콜드브루에 우유를 더한 커피",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_043",
    "category": "coffee",
    "name_ko": "바닐라 크림 콜드브루",
    "name_en": "Vanilla Cream Cold Brew",
    "name_easy": "바닐라 크림을 올린 콜드브루",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_044",
    "category": "coffee",
    "name_ko": "니트로 콜드브루",
    "name_en": "Nitro Cold Brew",
    "name_easy": "질소를 넣어 부드러운 콜드브루",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_045",
    "category": "coffee",
    "name_ko": "더치커피",
    "name_en": "Dutch Coffee",
    "name_easy": "차갑게 천천히 추출한 진한 커피",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_046",
    "category": "coffee",
    "name_ko": "더치 라떼",
    "name_en": "Dutch Latte",
    "name_easy": "더치커피에 우유를 넣은 음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_047",
    "category": "coffee",
    "name_ko": "핸드드립 커피",
    "name_en": "Hand Drip Coffee",
    "name_easy": "원두 향을 살려 직접 내린 커피",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cof_048",
    "category": "coffee",
    "name_ko": "오늘의 드립커피",
    "name_en": "Coffee of the Day",
    "name_easy": "오늘 선정한 원두로 내린 커피",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_001",
    "category": "tea",
    "name_ko": "얼그레이",
    "name_en": "Earl Grey Tea",
    "name_easy": "베르가못 향의 홍차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_002",
    "category": "tea",
    "name_ko": "잉글리시 브렉퍼스트",
    "name_en": "English Breakfast Tea",
    "name_easy": "진하고 구수한 홍차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_003",
    "category": "tea",
    "name_ko": "다즐링",
    "name_en": "Darjeeling Tea",
    "name_easy": "은은한 꽃향의 홍차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_004",
    "category": "tea",
    "name_ko": "아삼",
    "name_en": "Assam Tea",
    "name_easy": "묵직하고 진한 홍차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_005",
    "category": "tea",
    "name_ko": "실론티",
    "name_en": "Ceylon Tea",
    "name_easy": "산뜻한 향의 홍차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_006",
    "category": "tea",
    "name_ko": "페퍼민트티",
    "name_en": "Peppermint Tea",
    "name_easy": "상쾌한 민트 허브차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_007",
    "category": "tea",
    "name_ko": "캐모마일티",
    "name_en": "Chamomile Tea",
    "name_easy": "부드러운 꽃향의 허브차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_008",
    "category": "tea",
    "name_ko": "루이보스티",
    "name_en": "Rooibos Tea",
    "name_easy": "카페인이 없는 고소한 허브차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_009",
    "category": "tea",
    "name_ko": "히비스커스티",
    "name_en": "Hibiscus Tea",
    "name_easy": "새콤한 붉은색 허브차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1737911803280-17028410f957?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_010",
    "category": "tea",
    "name_ko": "레몬그라스티",
    "name_en": "Lemongrass Tea",
    "name_easy": "레몬 향이 산뜻한 허브차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_011",
    "category": "tea",
    "name_ko": "자스민티",
    "name_en": "Jasmine Tea",
    "name_easy": "자스민 꽃향의 차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_012",
    "category": "tea",
    "name_ko": "녹차",
    "name_en": "Green Tea",
    "name_easy": "깔끔하고 담백한 차",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_013",
    "category": "tea",
    "name_ko": "현미녹차",
    "name_en": "Brown Rice Green Tea",
    "name_easy": "구수한 현미 향의 녹차",
    "price": 4700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_014",
    "category": "tea",
    "name_ko": "말차",
    "name_en": "Matcha Tea",
    "name_easy": "진한 녹차 가루로 만든 차",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_015",
    "category": "tea",
    "name_ko": "우롱차",
    "name_en": "Oolong Tea",
    "name_easy": "은은하고 구수한 반발효차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_016",
    "category": "tea",
    "name_ko": "보이차",
    "name_en": "Pu-erh Tea",
    "name_easy": "깊고 구수한 발효차",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_017",
    "category": "tea",
    "name_ko": "유자차",
    "name_en": "Yuzu Tea",
    "name_easy": "유자청을 넣은 달콤한 차",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_018",
    "category": "tea",
    "name_ko": "레몬차",
    "name_en": "Lemon Tea",
    "name_easy": "레몬이 들어간 상큼한 차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_019",
    "category": "tea",
    "name_ko": "자몽차",
    "name_en": "Grapefruit Tea",
    "name_easy": "자몽청을 넣은 새콤달콤한 차",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_020",
    "category": "tea",
    "name_ko": "대추차",
    "name_en": "Jujube Tea",
    "name_easy": "대추를 달여 만든 달콤한 차",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_021",
    "category": "tea",
    "name_ko": "생강차",
    "name_en": "Ginger Tea",
    "name_easy": "알싸하고 따뜻한 생강차",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_022",
    "category": "tea",
    "name_ko": "모과차",
    "name_en": "Quince Tea",
    "name_easy": "향긋한 모과청으로 만든 차",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765153743332-949b8d623d92?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_023",
    "category": "tea",
    "name_ko": "오미자차",
    "name_en": "Omija Tea",
    "name_easy": "다섯 가지 맛이 나는 붉은 전통차",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1737911803280-17028410f957?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_024",
    "category": "tea",
    "name_ko": "매실차",
    "name_en": "Plum Tea",
    "name_easy": "매실청을 넣은 새콤달콤한 차",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_025",
    "category": "tea",
    "name_ko": "복숭아 아이스티",
    "name_en": "Peach Iced Tea",
    "name_easy": "달콤한 복숭아 맛의 차가운 차",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_026",
    "category": "tea",
    "name_ko": "레몬 아이스티",
    "name_en": "Lemon Iced Tea",
    "name_easy": "상큼한 레몬 맛의 차가운 차",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_027",
    "category": "tea",
    "name_ko": "자몽 아이스티",
    "name_en": "Grapefruit Iced Tea",
    "name_easy": "쌉싸름하고 상큼한 차가운 차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "tea_028",
    "category": "tea",
    "name_ko": "청포도 아이스티",
    "name_en": "Green Grape Iced Tea",
    "name_easy": "청포도 향이 달콤한 차가운 차",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_001",
    "category": "milk_tea",
    "name_ko": "클래식 밀크티",
    "name_en": "Classic Milk Tea",
    "name_easy": "홍차와 우유를 섞은 부드러운 차",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_002",
    "category": "milk_tea",
    "name_ko": "얼그레이 밀크티",
    "name_en": "Earl Grey Milk Tea",
    "name_easy": "얼그레이 향의 우유 차",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_003",
    "category": "milk_tea",
    "name_ko": "아쌈 밀크티",
    "name_en": "Assam Milk Tea",
    "name_easy": "진한 아쌈 홍차로 만든 밀크티",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_004",
    "category": "milk_tea",
    "name_ko": "로열 밀크티",
    "name_en": "Royal Milk Tea",
    "name_easy": "진하게 우린 홍차와 우유의 밀크티",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_005",
    "category": "milk_tea",
    "name_ko": "흑당 버블 밀크티",
    "name_en": "Brown Sugar Bubble Milk Tea",
    "name_easy": "흑당과 타피오카 펄이 들어간 밀크티",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1745883949374-baeba0ed57c3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_006",
    "category": "milk_tea",
    "name_ko": "타로 밀크티",
    "name_en": "Taro Milk Tea",
    "name_easy": "달콤하고 고소한 타로 맛 밀크티",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_007",
    "category": "milk_tea",
    "name_ko": "말차 밀크티",
    "name_en": "Matcha Milk Tea",
    "name_easy": "말차와 우유를 섞은 진한 음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_008",
    "category": "milk_tea",
    "name_ko": "초콜릿 밀크티",
    "name_en": "Chocolate Milk Tea",
    "name_easy": "초콜릿을 더한 달콤한 밀크티",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_009",
    "category": "milk_tea",
    "name_ko": "딸기 밀크티",
    "name_en": "Strawberry Milk Tea",
    "name_easy": "딸기 맛을 더한 달콤한 밀크티",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_010",
    "category": "milk_tea",
    "name_ko": "우롱 밀크티",
    "name_en": "Oolong Milk Tea",
    "name_easy": "우롱차 향이 구수한 밀크티",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_011",
    "category": "milk_tea",
    "name_ko": "코코넛 밀크티",
    "name_en": "Coconut Milk Tea",
    "name_easy": "코코넛 향을 더한 밀크티",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "mlt_012",
    "category": "milk_tea",
    "name_ko": "자스민 밀크티",
    "name_en": "Jasmine Milk Tea",
    "name_easy": "자스민 향이 은은한 밀크티",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1542674817-c7b187ceb76a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_001",
    "category": "non_coffee",
    "name_ko": "초콜릿 라떼",
    "name_en": "Chocolate Latte",
    "name_easy": "진한 초콜릿과 우유 음료",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_002",
    "category": "non_coffee",
    "name_ko": "아이스 초콜릿",
    "name_en": "Iced Chocolate",
    "name_easy": "차갑고 달콤한 초콜릿 음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_003",
    "category": "non_coffee",
    "name_ko": "화이트 초콜릿 라떼",
    "name_en": "White Chocolate Latte",
    "name_easy": "화이트초콜릿과 우유로 만든 음료",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_004",
    "category": "non_coffee",
    "name_ko": "민트 초콜릿 라떼",
    "name_en": "Mint Chocolate Latte",
    "name_easy": "민트 향이 나는 초콜릿 우유",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_005",
    "category": "non_coffee",
    "name_ko": "말차 라떼",
    "name_en": "Matcha Latte",
    "name_easy": "말차와 우유를 섞은 음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_006",
    "category": "non_coffee",
    "name_ko": "아이스 말차 라떼",
    "name_en": "Iced Matcha Latte",
    "name_easy": "차가운 말차 우유 음료",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_007",
    "category": "non_coffee",
    "name_ko": "고구마 라떼",
    "name_en": "Sweet Potato Latte",
    "name_easy": "달콤한 고구마와 우유 음료",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_008",
    "category": "non_coffee",
    "name_ko": "단호박 라떼",
    "name_en": "Sweet Pumpkin Latte",
    "name_easy": "부드러운 단호박과 우유 음료",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_009",
    "category": "non_coffee",
    "name_ko": "곡물 라떼",
    "name_en": "Grain Latte",
    "name_easy": "여러 곡물로 만든 고소한 음료",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_010",
    "category": "non_coffee",
    "name_ko": "미숫가루",
    "name_en": "Korean Grain Drink",
    "name_easy": "고소한 곡물 가루 음료",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_011",
    "category": "non_coffee",
    "name_ko": "흑임자 라떼",
    "name_en": "Black Sesame Latte",
    "name_easy": "검은깨가 들어간 고소한 우유",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_012",
    "category": "non_coffee",
    "name_ko": "인절미 라떼",
    "name_en": "Injeolmi Latte",
    "name_easy": "콩가루 향이 고소한 우유 음료",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_013",
    "category": "non_coffee",
    "name_ko": "딸기 라떼",
    "name_en": "Strawberry Latte",
    "name_easy": "딸기 과육과 우유를 섞은 음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_014",
    "category": "non_coffee",
    "name_ko": "블루베리 라떼",
    "name_en": "Blueberry Latte",
    "name_easy": "블루베리와 우유를 섞은 음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_015",
    "category": "non_coffee",
    "name_ko": "바나나 라떼",
    "name_en": "Banana Latte",
    "name_easy": "바나나와 우유를 섞은 달콤한 음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_016",
    "category": "non_coffee",
    "name_ko": "초당옥수수 라떼",
    "name_en": "Sweet Corn Latte",
    "name_easy": "달콤한 옥수수와 우유 음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_017",
    "category": "non_coffee",
    "name_ko": "쑥 라떼",
    "name_en": "Mugwort Latte",
    "name_easy": "쑥 향이 은은한 우유 음료",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_018",
    "category": "non_coffee",
    "name_ko": "꿀우유",
    "name_en": "Honey Milk",
    "name_easy": "꿀을 넣은 따뜻한 우유",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_019",
    "category": "non_coffee",
    "name_ko": "자색고구마 라떼",
    "name_en": "Purple Sweet Potato Latte",
    "name_easy": "자색고구마로 만든 달콤한 우유 음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ncf_020",
    "category": "non_coffee",
    "name_ko": "밀크티 코코아",
    "name_en": "Milk Tea Cocoa",
    "name_easy": "밀크티와 코코아를 섞은 달콤한 음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_001",
    "category": "ade",
    "name_ko": "레몬 에이드",
    "name_en": "Lemon Ade",
    "name_easy": "레몬이 들어간 상큼한 탄산음료",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_002",
    "category": "ade",
    "name_ko": "자몽 에이드",
    "name_en": "Grapefruit Ade",
    "name_easy": "자몽이 들어간 새콤한 탄산음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_003",
    "category": "ade",
    "name_ko": "청포도 에이드",
    "name_en": "Green Grape Ade",
    "name_easy": "청포도 맛의 달콤한 탄산음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_004",
    "category": "ade",
    "name_ko": "오렌지 에이드",
    "name_en": "Orange Ade",
    "name_easy": "오렌지가 들어간 상큼한 탄산음료",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_005",
    "category": "ade",
    "name_ko": "유자 에이드",
    "name_en": "Yuzu Ade",
    "name_easy": "유자 향의 달콤한 탄산음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_006",
    "category": "ade",
    "name_ko": "라임 에이드",
    "name_en": "Lime Ade",
    "name_easy": "라임 향이 산뜻한 탄산음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_007",
    "category": "ade",
    "name_ko": "블루레몬 에이드",
    "name_en": "Blue Lemon Ade",
    "name_easy": "푸른색 레몬 맛 탄산음료",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_008",
    "category": "ade",
    "name_ko": "패션후르츠 에이드",
    "name_en": "Passion Fruit Ade",
    "name_easy": "패션후르츠가 들어간 새콤한 탄산음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_009",
    "category": "ade",
    "name_ko": "복숭아 에이드",
    "name_en": "Peach Ade",
    "name_easy": "복숭아 향이 달콤한 탄산음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_010",
    "category": "ade",
    "name_ko": "딸기 에이드",
    "name_en": "Strawberry Ade",
    "name_easy": "딸기 과육이 들어간 탄산음료",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_011",
    "category": "ade",
    "name_ko": "체리 에이드",
    "name_en": "Cherry Ade",
    "name_easy": "체리 향이 달콤한 탄산음료",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_012",
    "category": "ade",
    "name_ko": "망고 에이드",
    "name_en": "Mango Ade",
    "name_easy": "망고 향이 진한 탄산음료",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_013",
    "category": "ade",
    "name_ko": "수박 에이드",
    "name_en": "Watermelon Ade",
    "name_easy": "수박 맛의 시원한 탄산음료",
    "price": 5900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_014",
    "category": "ade",
    "name_ko": "오미자 에이드",
    "name_en": "Omija Ade",
    "name_easy": "오미자를 넣은 붉은 탄산음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_015",
    "category": "ade",
    "name_ko": "매실 에이드",
    "name_en": "Plum Ade",
    "name_easy": "매실청을 넣은 상큼한 탄산음료",
    "price": 5700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_016",
    "category": "ade",
    "name_ko": "자두 에이드",
    "name_en": "Plum Fruit Ade",
    "name_easy": "자두 맛이 새콤달콤한 탄산음료",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_017",
    "category": "ade",
    "name_ko": "메론 소다",
    "name_en": "Melon Soda",
    "name_easy": "메론 향의 달콤한 탄산음료",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ade_018",
    "category": "ade",
    "name_ko": "크림 소다",
    "name_en": "Cream Soda",
    "name_easy": "부드러운 크림 맛 탄산음료",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1651993737174-6890c1daef5b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_001",
    "category": "juice",
    "name_ko": "오렌지 주스",
    "name_en": "Orange Juice",
    "name_easy": "신선한 오렌지 과일주스",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_002",
    "category": "juice",
    "name_ko": "자몽 주스",
    "name_en": "Grapefruit Juice",
    "name_easy": "쌉싸름하고 상큼한 자몽주스",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_003",
    "category": "juice",
    "name_ko": "사과 주스",
    "name_en": "Apple Juice",
    "name_easy": "달콤하고 깔끔한 사과주스",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_004",
    "category": "juice",
    "name_ko": "청포도 주스",
    "name_en": "Green Grape Juice",
    "name_easy": "청포도의 달콤함을 살린 주스",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_005",
    "category": "juice",
    "name_ko": "포도 주스",
    "name_en": "Grape Juice",
    "name_easy": "진한 포도 맛의 과일주스",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_006",
    "category": "juice",
    "name_ko": "파인애플 주스",
    "name_en": "Pineapple Juice",
    "name_easy": "새콤달콤한 파인애플주스",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_007",
    "category": "juice",
    "name_ko": "망고 주스",
    "name_en": "Mango Juice",
    "name_easy": "진하고 달콤한 망고주스",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_008",
    "category": "juice",
    "name_ko": "수박 주스",
    "name_en": "Watermelon Juice",
    "name_easy": "시원하고 달콤한 수박주스",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_009",
    "category": "juice",
    "name_ko": "토마토 주스",
    "name_en": "Tomato Juice",
    "name_easy": "신선한 토마토로 만든 주스",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_010",
    "category": "juice",
    "name_ko": "키위 주스",
    "name_en": "Kiwi Juice",
    "name_easy": "새콤한 키위 과일주스",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_011",
    "category": "juice",
    "name_ko": "딸기 주스",
    "name_en": "Strawberry Juice",
    "name_easy": "딸기 과육이 들어간 과일주스",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_012",
    "category": "juice",
    "name_ko": "블루베리 주스",
    "name_en": "Blueberry Juice",
    "name_easy": "블루베리의 달콤함을 살린 주스",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_013",
    "category": "juice",
    "name_ko": "복숭아 주스",
    "name_en": "Peach Juice",
    "name_easy": "향긋하고 달콤한 복숭아주스",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_014",
    "category": "juice",
    "name_ko": "배 주스",
    "name_en": "Pear Juice",
    "name_easy": "시원하고 깔끔한 배주스",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_015",
    "category": "juice",
    "name_ko": "레몬 주스",
    "name_en": "Lemon Juice",
    "name_easy": "상큼하고 진한 레몬주스",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_016",
    "category": "juice",
    "name_ko": "당근 주스",
    "name_en": "Carrot Juice",
    "name_easy": "신선한 당근으로 만든 채소주스",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1616442047042-f54e9f6bd435?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_017",
    "category": "juice",
    "name_ko": "케일 사과 주스",
    "name_en": "Kale Apple Juice",
    "name_easy": "케일과 사과를 섞은 건강주스",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1616442047042-f54e9f6bd435?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_018",
    "category": "juice",
    "name_ko": "비트 사과 주스",
    "name_en": "Beet Apple Juice",
    "name_easy": "비트와 사과를 섞은 붉은 주스",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1616442047042-f54e9f6bd435?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_019",
    "category": "juice",
    "name_ko": "ABC 주스",
    "name_en": "Apple Beet Carrot Juice",
    "name_easy": "사과·비트·당근을 섞은 건강주스",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1616442047042-f54e9f6bd435?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "jui_020",
    "category": "juice",
    "name_ko": "셀러리 사과 주스",
    "name_en": "Celery Apple Juice",
    "name_easy": "셀러리와 사과를 섞은 산뜻한 주스",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1616442047042-f54e9f6bd435?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_001",
    "category": "smoothie",
    "name_ko": "딸기 스무디",
    "name_en": "Strawberry Smoothie",
    "name_easy": "딸기를 갈아 만든 차가운 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_002",
    "category": "smoothie",
    "name_ko": "블루베리 스무디",
    "name_en": "Blueberry Smoothie",
    "name_easy": "블루베리를 갈아 만든 차가운 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_003",
    "category": "smoothie",
    "name_ko": "망고 스무디",
    "name_en": "Mango Smoothie",
    "name_easy": "망고를 갈아 만든 달콤한 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_004",
    "category": "smoothie",
    "name_ko": "키위 스무디",
    "name_en": "Kiwi Smoothie",
    "name_easy": "키위를 갈아 만든 새콤한 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_005",
    "category": "smoothie",
    "name_ko": "바나나 스무디",
    "name_en": "Banana Smoothie",
    "name_easy": "바나나를 갈아 만든 부드러운 음료",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_006",
    "category": "smoothie",
    "name_ko": "파인애플 스무디",
    "name_en": "Pineapple Smoothie",
    "name_easy": "파인애플을 갈아 만든 상큼한 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_007",
    "category": "smoothie",
    "name_ko": "복숭아 스무디",
    "name_en": "Peach Smoothie",
    "name_easy": "복숭아를 갈아 만든 달콤한 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_008",
    "category": "smoothie",
    "name_ko": "청포도 스무디",
    "name_en": "Green Grape Smoothie",
    "name_easy": "청포도를 갈아 만든 시원한 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_009",
    "category": "smoothie",
    "name_ko": "요거트 스무디",
    "name_en": "Yogurt Smoothie",
    "name_easy": "새콤한 요구르트를 갈아 만든 음료",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_010",
    "category": "smoothie",
    "name_ko": "딸기 요거트 스무디",
    "name_en": "Strawberry Yogurt Smoothie",
    "name_easy": "딸기와 요구르트를 섞은 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_011",
    "category": "smoothie",
    "name_ko": "블루베리 요거트 스무디",
    "name_en": "Blueberry Yogurt Smoothie",
    "name_easy": "블루베리와 요구르트를 섞은 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_012",
    "category": "smoothie",
    "name_ko": "망고 요거트 스무디",
    "name_en": "Mango Yogurt Smoothie",
    "name_easy": "망고와 요구르트를 섞은 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_013",
    "category": "smoothie",
    "name_ko": "커피 프라페",
    "name_en": "Coffee Frappe",
    "name_easy": "커피와 얼음을 곱게 간 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_014",
    "category": "smoothie",
    "name_ko": "모카 프라페",
    "name_en": "Mocha Frappe",
    "name_easy": "커피와 초콜릿을 얼음과 간 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_015",
    "category": "smoothie",
    "name_ko": "카라멜 프라페",
    "name_en": "Caramel Frappe",
    "name_easy": "카라멜과 커피를 얼음과 간 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_016",
    "category": "smoothie",
    "name_ko": "바닐라 프라페",
    "name_en": "Vanilla Frappe",
    "name_easy": "바닐라 향의 부드러운 얼음 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_017",
    "category": "smoothie",
    "name_ko": "초콜릿 프라페",
    "name_en": "Chocolate Frappe",
    "name_easy": "초콜릿과 얼음을 곱게 간 음료",
    "price": 6700,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_018",
    "category": "smoothie",
    "name_ko": "민트초코 프라페",
    "name_en": "Mint Chocolate Frappe",
    "name_easy": "민트와 초콜릿을 얼음과 간 음료",
    "price": 6900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_019",
    "category": "smoothie",
    "name_ko": "쿠키앤크림 프라페",
    "name_en": "Cookies and Cream Frappe",
    "name_easy": "쿠키와 크림을 얼음과 간 음료",
    "price": 6900,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_020",
    "category": "smoothie",
    "name_ko": "말차 프라페",
    "name_en": "Matcha Frappe",
    "name_easy": "말차와 우유를 얼음과 간 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1765162007488-077bb985ae4c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_021",
    "category": "smoothie",
    "name_ko": "딸기 프라페",
    "name_en": "Strawberry Frappe",
    "name_easy": "딸기와 우유를 얼음과 간 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_022",
    "category": "smoothie",
    "name_ko": "망고 프라페",
    "name_en": "Mango Frappe",
    "name_easy": "망고와 얼음을 곱게 간 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_023",
    "category": "smoothie",
    "name_ko": "플레인 밀크셰이크",
    "name_en": "Plain Milkshake",
    "name_easy": "우유와 아이스크림을 갈아 만든 음료",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_024",
    "category": "smoothie",
    "name_ko": "초콜릿 밀크셰이크",
    "name_en": "Chocolate Milkshake",
    "name_easy": "초콜릿과 아이스크림을 갈아 만든 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_025",
    "category": "smoothie",
    "name_ko": "딸기 밀크셰이크",
    "name_en": "Strawberry Milkshake",
    "name_easy": "딸기와 아이스크림을 갈아 만든 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "smo_026",
    "category": "smoothie",
    "name_ko": "바나나 밀크셰이크",
    "name_en": "Banana Milkshake",
    "name_easy": "바나나와 아이스크림을 갈아 만든 음료",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_001",
    "category": "cake",
    "name_ko": "뉴욕 치즈케이크",
    "name_en": "New York Cheesecake",
    "name_easy": "진하고 꾸덕한 치즈케이크",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_002",
    "category": "cake",
    "name_ko": "수플레 치즈케이크",
    "name_en": "Souffle Cheesecake",
    "name_easy": "폭신하고 부드러운 치즈케이크",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_003",
    "category": "cake",
    "name_ko": "바스크 치즈케이크",
    "name_en": "Basque Cheesecake",
    "name_easy": "겉면을 진하게 구운 치즈케이크",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_004",
    "category": "cake",
    "name_ko": "딸기 생크림 케이크",
    "name_en": "Strawberry Cream Cake",
    "name_easy": "딸기와 생크림을 넣은 케이크",
    "price": 7200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1647188842142-ab7fb7178eb8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_005",
    "category": "cake",
    "name_ko": "초콜릿 케이크",
    "name_en": "Chocolate Cake",
    "name_easy": "진한 초콜릿 맛의 케이크",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_006",
    "category": "cake",
    "name_ko": "가나슈 케이크",
    "name_en": "Chocolate Ganache Cake",
    "name_easy": "진한 초콜릿 가나슈 케이크",
    "price": 7200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_007",
    "category": "cake",
    "name_ko": "레드벨벳 케이크",
    "name_en": "Red Velvet Cake",
    "name_easy": "붉은 시트와 크림치즈가 어우러진 케이크",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_008",
    "category": "cake",
    "name_ko": "당근 케이크",
    "name_en": "Carrot Cake",
    "name_easy": "당근과 견과류가 들어간 촉촉한 케이크",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_009",
    "category": "cake",
    "name_ko": "티라미수",
    "name_en": "Tiramisu",
    "name_easy": "커피와 마스카포네 크림 디저트",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_010",
    "category": "cake",
    "name_ko": "말차 케이크",
    "name_en": "Matcha Cake",
    "name_easy": "말차 향이 진한 부드러운 케이크",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_011",
    "category": "cake",
    "name_ko": "고구마 케이크",
    "name_en": "Sweet Potato Cake",
    "name_easy": "달콤한 고구마 크림 케이크",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_012",
    "category": "cake",
    "name_ko": "블루베리 케이크",
    "name_en": "Blueberry Cake",
    "name_easy": "블루베리를 넣은 상큼한 케이크",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1647188842142-ab7fb7178eb8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_013",
    "category": "cake",
    "name_ko": "레몬 케이크",
    "name_en": "Lemon Cake",
    "name_easy": "레몬 향이 산뜻한 케이크",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1647188842142-ab7fb7178eb8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_014",
    "category": "cake",
    "name_ko": "얼그레이 케이크",
    "name_en": "Earl Grey Cake",
    "name_easy": "얼그레이 향이 은은한 케이크",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_015",
    "category": "cake",
    "name_ko": "오레오 케이크",
    "name_en": "Oreo Cake",
    "name_easy": "초콜릿 쿠키가 들어간 케이크",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_016",
    "category": "cake",
    "name_ko": "몽블랑 케이크",
    "name_en": "Mont Blanc Cake",
    "name_easy": "밤 크림을 올린 부드러운 케이크",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_017",
    "category": "cake",
    "name_ko": "밀크 크레이프",
    "name_en": "Mille Crepe Cake",
    "name_easy": "얇은 크레이프와 크림을 겹친 케이크",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_018",
    "category": "cake",
    "name_ko": "초코 크레이프",
    "name_en": "Chocolate Crepe Cake",
    "name_easy": "초콜릿 크레이프를 겹친 케이크",
    "price": 7600,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_019",
    "category": "cake",
    "name_ko": "생크림 카스텔라",
    "name_en": "Cream Castella",
    "name_easy": "부드러운 카스텔라와 생크림 디저트",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1647188842142-ab7fb7178eb8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "cak_020",
    "category": "cake",
    "name_ko": "파운드 케이크",
    "name_en": "Pound Cake",
    "name_easy": "버터 풍미가 진한 묵직한 케이크",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_001",
    "category": "dessert",
    "name_ko": "플레인 와플",
    "name_en": "Plain Waffle",
    "name_easy": "바삭하게 구운 기본 와플",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_002",
    "category": "dessert",
    "name_ko": "생크림 와플",
    "name_en": "Cream Waffle",
    "name_easy": "생크림을 올린 달콤한 와플",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_003",
    "category": "dessert",
    "name_ko": "딸기 와플",
    "name_en": "Strawberry Waffle",
    "name_easy": "딸기와 생크림을 올린 와플",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_004",
    "category": "dessert",
    "name_ko": "바나나 초코 와플",
    "name_en": "Banana Chocolate Waffle",
    "name_easy": "바나나와 초콜릿을 올린 와플",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_005",
    "category": "dessert",
    "name_ko": "플레인 크로플",
    "name_en": "Plain Croffle",
    "name_easy": "크루아상 반죽으로 구운 바삭한 디저트",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_006",
    "category": "dessert",
    "name_ko": "아이스크림 크로플",
    "name_en": "Ice Cream Croffle",
    "name_easy": "아이스크림을 올린 크로플",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_007",
    "category": "dessert",
    "name_ko": "브라운치즈 크로플",
    "name_en": "Brown Cheese Croffle",
    "name_easy": "갈색 치즈를 올린 달콤짭짤한 크로플",
    "price": 7200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1552012921-f09ba4bd24d9?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_008",
    "category": "dessert",
    "name_ko": "허니브레드",
    "name_en": "Honey Bread",
    "name_easy": "꿀과 생크림을 올린 두꺼운 토스트",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1660836579059-533e7a1839b7?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_009",
    "category": "dessert",
    "name_ko": "프렌치토스트",
    "name_en": "French Toast",
    "name_easy": "달걀물에 적셔 구운 부드러운 토스트",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1660836579059-533e7a1839b7?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_010",
    "category": "dessert",
    "name_ko": "초콜릿 브라우니",
    "name_en": "Chocolate Brownie",
    "name_easy": "진하고 촉촉한 초콜릿 구움과자",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_011",
    "category": "dessert",
    "name_ko": "초코칩 쿠키",
    "name_en": "Chocolate Chip Cookie",
    "name_easy": "초콜릿 조각이 들어간 쿠키",
    "price": 3500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_012",
    "category": "dessert",
    "name_ko": "더블초코 쿠키",
    "name_en": "Double Chocolate Cookie",
    "name_easy": "초콜릿 맛이 진한 쿠키",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_013",
    "category": "dessert",
    "name_ko": "마카다미아 쿠키",
    "name_en": "Macadamia Cookie",
    "name_easy": "마카다미아가 들어간 고소한 쿠키",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_014",
    "category": "dessert",
    "name_ko": "오트밀 쿠키",
    "name_en": "Oatmeal Cookie",
    "name_easy": "귀리와 건과일이 들어간 쿠키",
    "price": 3600,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_015",
    "category": "dessert",
    "name_ko": "마카롱",
    "name_en": "Macaron",
    "name_easy": "겉은 바삭하고 속은 촉촉한 프랑스 과자",
    "price": 3000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_016",
    "category": "dessert",
    "name_ko": "다쿠아즈",
    "name_en": "Dacquoise",
    "name_easy": "아몬드 머랭 사이에 크림을 넣은 과자",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_017",
    "category": "dessert",
    "name_ko": "에그타르트",
    "name_en": "Egg Tart",
    "name_easy": "달걀 커스터드를 채운 작은 타르트",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_018",
    "category": "dessert",
    "name_ko": "애플파이",
    "name_en": "Apple Pie",
    "name_easy": "사과 조림을 넣은 바삭한 파이",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_019",
    "category": "dessert",
    "name_ko": "피칸파이",
    "name_en": "Pecan Pie",
    "name_easy": "피칸과 달콤한 필링을 넣은 파이",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_020",
    "category": "dessert",
    "name_ko": "레몬 타르트",
    "name_en": "Lemon Tart",
    "name_easy": "새콤한 레몬 크림을 채운 타르트",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_021",
    "category": "dessert",
    "name_ko": "과일 타르트",
    "name_en": "Fruit Tart",
    "name_easy": "커스터드와 생과일을 올린 타르트",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_022",
    "category": "dessert",
    "name_ko": "푸딩",
    "name_en": "Custard Pudding",
    "name_easy": "부드러운 달걀 커스터드 디저트",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_023",
    "category": "dessert",
    "name_ko": "판나코타",
    "name_en": "Panna Cotta",
    "name_easy": "생크림으로 만든 부드러운 이탈리아 디저트",
    "price": 5500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "des_024",
    "category": "dessert",
    "name_ko": "크렘브륄레",
    "name_en": "Creme Brulee",
    "name_easy": "설탕을 바삭하게 구운 커스터드 디저트",
    "price": 6000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_001",
    "category": "bakery",
    "name_ko": "플레인 크루아상",
    "name_en": "Plain Croissant",
    "name_easy": "버터 향이 풍부한 바삭한 빵",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_002",
    "category": "bakery",
    "name_ko": "아몬드 크루아상",
    "name_en": "Almond Croissant",
    "name_easy": "아몬드 크림과 견과류를 넣은 빵",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_003",
    "category": "bakery",
    "name_ko": "초콜릿 크루아상",
    "name_en": "Chocolate Croissant",
    "name_easy": "초콜릿을 넣은 바삭한 빵",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_004",
    "category": "bakery",
    "name_ko": "소금빵",
    "name_en": "Salt Bread",
    "name_easy": "버터와 소금 맛이 어우러진 부드러운 빵",
    "price": 3500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_005",
    "category": "bakery",
    "name_ko": "마늘 소금빵",
    "name_en": "Garlic Salt Bread",
    "name_easy": "마늘 버터를 더한 소금빵",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_006",
    "category": "bakery",
    "name_ko": "뺑오쇼콜라",
    "name_en": "Pain au Chocolat",
    "name_easy": "초콜릿을 넣은 프랑스식 페이스트리",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_007",
    "category": "bakery",
    "name_ko": "시나몬롤",
    "name_en": "Cinnamon Roll",
    "name_easy": "계피 설탕을 말아 구운 달콤한 빵",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_008",
    "category": "bakery",
    "name_ko": "애플 데니시",
    "name_en": "Apple Danish",
    "name_easy": "사과 필링을 올린 페이스트리",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_009",
    "category": "bakery",
    "name_ko": "블루베리 데니시",
    "name_en": "Blueberry Danish",
    "name_easy": "블루베리를 올린 페이스트리",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_010",
    "category": "bakery",
    "name_ko": "메이플 피칸 데니시",
    "name_en": "Maple Pecan Danish",
    "name_easy": "메이플과 피칸을 올린 페이스트리",
    "price": 5200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_011",
    "category": "bakery",
    "name_ko": "플레인 베이글",
    "name_en": "Plain Bagel",
    "name_easy": "쫄깃하고 담백한 둥근 빵",
    "price": 3500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1772471586672-bae98014f325?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_012",
    "category": "bakery",
    "name_ko": "블루베리 베이글",
    "name_en": "Blueberry Bagel",
    "name_easy": "블루베리가 들어간 쫄깃한 빵",
    "price": 4000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1772471586672-bae98014f325?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_013",
    "category": "bakery",
    "name_ko": "어니언 베이글",
    "name_en": "Onion Bagel",
    "name_easy": "양파 풍미가 나는 쫄깃한 빵",
    "price": 4000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1772471586672-bae98014f325?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_014",
    "category": "bakery",
    "name_ko": "크림치즈 베이글",
    "name_en": "Cream Cheese Bagel",
    "name_easy": "크림치즈를 곁들인 베이글",
    "price": 5000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1772471586672-bae98014f325?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_015",
    "category": "bakery",
    "name_ko": "플레인 스콘",
    "name_en": "Plain Scone",
    "name_easy": "담백하고 포슬포슬한 구움과자",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_016",
    "category": "bakery",
    "name_ko": "초코칩 스콘",
    "name_en": "Chocolate Chip Scone",
    "name_easy": "초콜릿 조각이 들어간 스콘",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_017",
    "category": "bakery",
    "name_ko": "얼그레이 스콘",
    "name_en": "Earl Grey Scone",
    "name_easy": "얼그레이 향이 은은한 스콘",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_018",
    "category": "bakery",
    "name_ko": "크랜베리 스콘",
    "name_en": "Cranberry Scone",
    "name_easy": "새콤한 크랜베리가 들어간 스콘",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_019",
    "category": "bakery",
    "name_ko": "플레인 머핀",
    "name_en": "Plain Muffin",
    "name_easy": "부드럽고 담백한 머핀",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_020",
    "category": "bakery",
    "name_ko": "블루베리 머핀",
    "name_en": "Blueberry Muffin",
    "name_easy": "블루베리가 들어간 촉촉한 머핀",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_021",
    "category": "bakery",
    "name_ko": "초콜릿 머핀",
    "name_en": "Chocolate Muffin",
    "name_easy": "초콜릿 맛이 진한 촉촉한 머핀",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_022",
    "category": "bakery",
    "name_ko": "바나나 머핀",
    "name_en": "Banana Muffin",
    "name_easy": "바나나 향이 달콤한 머핀",
    "price": 4200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_023",
    "category": "bakery",
    "name_ko": "마들렌",
    "name_en": "Madeleine",
    "name_easy": "버터 향이 부드러운 조개 모양 과자",
    "price": 3000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_024",
    "category": "bakery",
    "name_ko": "휘낭시에",
    "name_en": "Financier",
    "name_easy": "버터와 아몬드 향이 진한 구움과자",
    "price": 3300,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_025",
    "category": "bakery",
    "name_ko": "카눌레",
    "name_en": "Canele",
    "name_easy": "겉은 바삭하고 속은 촉촉한 프랑스 과자",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_026",
    "category": "bakery",
    "name_ko": "앙버터",
    "name_en": "Red Bean Butter Bread",
    "name_easy": "팥과 두꺼운 버터를 넣은 빵",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_027",
    "category": "bakery",
    "name_ko": "크림빵",
    "name_en": "Cream Bun",
    "name_easy": "부드러운 크림을 채운 빵",
    "price": 3800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "bak_028",
    "category": "bakery",
    "name_ko": "단팥빵",
    "name_en": "Red Bean Bun",
    "name_easy": "달콤한 팥앙금을 넣은 빵",
    "price": 3500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1600069621991-61428234686a?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_001",
    "category": "sandwich",
    "name_ko": "햄치즈 샌드위치",
    "name_en": "Ham and Cheese Sandwich",
    "name_easy": "햄과 치즈를 넣은 기본 샌드위치",
    "price": 6500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_002",
    "category": "sandwich",
    "name_ko": "에그 샌드위치",
    "name_en": "Egg Sandwich",
    "name_easy": "부드러운 달걀 샐러드를 넣은 샌드위치",
    "price": 6200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_003",
    "category": "sandwich",
    "name_ko": "참치 샌드위치",
    "name_en": "Tuna Sandwich",
    "name_easy": "참치 샐러드를 넣은 든든한 샌드위치",
    "price": 6800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_004",
    "category": "sandwich",
    "name_ko": "치킨 샌드위치",
    "name_en": "Chicken Sandwich",
    "name_easy": "닭고기와 채소를 넣은 샌드위치",
    "price": 7200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_005",
    "category": "sandwich",
    "name_ko": "클럽 샌드위치",
    "name_en": "Club Sandwich",
    "name_easy": "햄·달걀·채소를 겹겹이 넣은 샌드위치",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_006",
    "category": "sandwich",
    "name_ko": "BLT 샌드위치",
    "name_en": "BLT Sandwich",
    "name_easy": "베이컨·상추·토마토를 넣은 샌드위치",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_007",
    "category": "sandwich",
    "name_ko": "아보카도 샌드위치",
    "name_en": "Avocado Sandwich",
    "name_easy": "아보카도와 채소를 넣은 샌드위치",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_008",
    "category": "sandwich",
    "name_ko": "불고기 샌드위치",
    "name_en": "Bulgogi Sandwich",
    "name_easy": "달콤한 불고기를 넣은 샌드위치",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_009",
    "category": "sandwich",
    "name_ko": "크랜베리 치킨 샌드위치",
    "name_en": "Cranberry Chicken Sandwich",
    "name_easy": "치킨과 크랜베리를 넣은 샌드위치",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_010",
    "category": "sandwich",
    "name_ko": "바질 모차렐라 샌드위치",
    "name_en": "Basil Mozzarella Sandwich",
    "name_easy": "바질과 모차렐라 치즈를 넣은 샌드위치",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_011",
    "category": "sandwich",
    "name_ko": "햄치즈 파니니",
    "name_en": "Ham and Cheese Panini",
    "name_easy": "햄과 치즈를 넣어 따뜻하게 구운 빵",
    "price": 7500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_012",
    "category": "sandwich",
    "name_ko": "치킨 파니니",
    "name_en": "Chicken Panini",
    "name_easy": "닭고기와 치즈를 넣어 구운 빵",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_013",
    "category": "sandwich",
    "name_ko": "불고기 파니니",
    "name_en": "Bulgogi Panini",
    "name_easy": "불고기와 치즈를 넣어 구운 빵",
    "price": 8000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_014",
    "category": "sandwich",
    "name_ko": "토마토 모차렐라 파니니",
    "name_en": "Tomato Mozzarella Panini",
    "name_easy": "토마토와 모차렐라를 넣어 구운 빵",
    "price": 7800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_015",
    "category": "sandwich",
    "name_ko": "에그마요 크루아상",
    "name_en": "Egg Mayo Croissant Sandwich",
    "name_easy": "크루아상에 달걀 샐러드를 넣은 샌드위치",
    "price": 7000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "san_016",
    "category": "sandwich",
    "name_ko": "햄치즈 크루아상",
    "name_en": "Ham Cheese Croissant Sandwich",
    "name_easy": "크루아상에 햄과 치즈를 넣은 샌드위치",
    "price": 7200,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_001",
    "category": "brunch",
    "name_ko": "아보카도 토스트",
    "name_en": "Avocado Toast",
    "name_easy": "구운 빵에 아보카도를 올린 메뉴",
    "price": 9000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1710533788728-800be38530a8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_002",
    "category": "brunch",
    "name_ko": "에그 토스트",
    "name_en": "Egg Toast",
    "name_easy": "구운 빵에 달걀을 올린 메뉴",
    "price": 8000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1710533788728-800be38530a8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_003",
    "category": "brunch",
    "name_ko": "스크램블에그 플레이트",
    "name_en": "Scrambled Egg Plate",
    "name_easy": "스크램블에그와 빵을 곁들인 한 접시",
    "price": 10500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1710533788728-800be38530a8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_004",
    "category": "brunch",
    "name_ko": "브런치 플레이트",
    "name_en": "Brunch Plate",
    "name_easy": "달걀·소시지·샐러드·빵을 담은 한 접시",
    "price": 13500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1710533788728-800be38530a8?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_005",
    "category": "brunch",
    "name_ko": "팬케이크",
    "name_en": "Pancakes",
    "name_easy": "폭신한 팬케이크와 시럽 메뉴",
    "price": 9500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1660836579059-533e7a1839b7?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_006",
    "category": "brunch",
    "name_ko": "프렌치토스트 플레이트",
    "name_en": "French Toast Plate",
    "name_easy": "프렌치토스트와 과일을 담은 한 접시",
    "price": 11000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1660836579059-533e7a1839b7?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_007",
    "category": "brunch",
    "name_ko": "리코타 치즈 샐러드",
    "name_en": "Ricotta Cheese Salad",
    "name_easy": "리코타 치즈와 채소를 담은 샐러드",
    "price": 11000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_008",
    "category": "brunch",
    "name_ko": "치킨 샐러드",
    "name_en": "Chicken Salad",
    "name_easy": "닭가슴살과 채소를 담은 샐러드",
    "price": 10500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_009",
    "category": "brunch",
    "name_ko": "콥 샐러드",
    "name_en": "Cobb Salad",
    "name_easy": "달걀·베이컨·채소를 풍성하게 담은 샐러드",
    "price": 11500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_010",
    "category": "brunch",
    "name_ko": "시저 샐러드",
    "name_en": "Caesar Salad",
    "name_easy": "로메인과 치즈를 곁들인 샐러드",
    "price": 10000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_011",
    "category": "brunch",
    "name_ko": "그래놀라 요거트볼",
    "name_en": "Granola Yogurt Bowl",
    "name_easy": "요거트에 그래놀라와 과일을 올린 메뉴",
    "price": 8500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1622646547410-57de837af350?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "brc_012",
    "category": "brunch",
    "name_ko": "아사이볼",
    "name_en": "Acai Bowl",
    "name_easy": "아사이 스무디에 과일과 그래놀라를 올린 메뉴",
    "price": 9500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1622646547410-57de837af350?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_001",
    "category": "ice_cream",
    "name_ko": "바닐라 아이스크림",
    "name_en": "Vanilla Ice Cream",
    "name_easy": "부드러운 바닐라 맛 아이스크림",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_002",
    "category": "ice_cream",
    "name_ko": "초콜릿 아이스크림",
    "name_en": "Chocolate Ice Cream",
    "name_easy": "진한 초콜릿 맛 아이스크림",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_003",
    "category": "ice_cream",
    "name_ko": "딸기 아이스크림",
    "name_en": "Strawberry Ice Cream",
    "name_easy": "딸기 맛이 상큼한 아이스크림",
    "price": 4500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_004",
    "category": "ice_cream",
    "name_ko": "말차 아이스크림",
    "name_en": "Matcha Ice Cream",
    "name_easy": "말차 향이 진한 아이스크림",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_005",
    "category": "ice_cream",
    "name_ko": "요거트 아이스크림",
    "name_en": "Yogurt Ice Cream",
    "name_easy": "새콤하고 부드러운 아이스크림",
    "price": 4800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_006",
    "category": "ice_cream",
    "name_ko": "초콜릿 선데",
    "name_en": "Chocolate Sundae",
    "name_easy": "초콜릿 소스를 올린 아이스크림",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_007",
    "category": "ice_cream",
    "name_ko": "딸기 선데",
    "name_en": "Strawberry Sundae",
    "name_easy": "딸기 소스를 올린 아이스크림",
    "price": 5800,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_008",
    "category": "ice_cream",
    "name_ko": "팥빙수",
    "name_en": "Red Bean Bingsu",
    "name_easy": "팥과 떡을 올린 한국식 빙수",
    "price": 12000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1595275320712-24b6f2b0a984?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_009",
    "category": "ice_cream",
    "name_ko": "인절미 빙수",
    "name_en": "Injeolmi Bingsu",
    "name_easy": "콩가루와 인절미를 올린 빙수",
    "price": 12500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1595275320712-24b6f2b0a984?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_010",
    "category": "ice_cream",
    "name_ko": "망고 빙수",
    "name_en": "Mango Bingsu",
    "name_easy": "망고를 듬뿍 올린 빙수",
    "price": 15000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1595275320712-24b6f2b0a984?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_011",
    "category": "ice_cream",
    "name_ko": "딸기 빙수",
    "name_en": "Strawberry Bingsu",
    "name_easy": "딸기를 듬뿍 올린 빙수",
    "price": 15000,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1595275320712-24b6f2b0a984?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    "id": "ice_012",
    "category": "ice_cream",
    "name_ko": "초코 빙수",
    "name_en": "Chocolate Bingsu",
    "name_easy": "초콜릿과 쿠키를 올린 빙수",
    "price": 13500,
    "isSoldOut": false,
    "image_url": "https://images.unsplash.com/photo-1595275320712-24b6f2b0a984?auto=format&fit=crop&w=800&h=600&q=80"
  }
]

let cartItems = new Map();

function renderMenu(items) {
    menuGrid.innerHTML = ''; 
    
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

            if (cartItems.has(item.id)) {
              const existingItem = cartItems.get(item.id);
              existingItem.quantity += 1;
            } else {
              cartItems.set(item.id, { ...item, quantity: 1});
            }
            alert(`🛒 ${item.name_ko}이(가) 장바구니에 담겼습니다.`); 
        });

        menuGrid.appendChild(clone);
    });
}

function renderCart () {
  menuGrid.innerHTML = '';
  if (cartItems.size === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.style.cssText = "grid-column: 1 / -1; text-align: center; padding: 50px; font-size: 20px; color: #666;";
        
      const msg1 = document.createElement('p');
      msg1.textContent = '장바구니가 비어있습니다.';
      const msg2 = document.createElement('p');
      msg2.textContent = '왼쪽 메뉴 카테고리에서 상품을 선택해 주세요.';
        
      emptyDiv.appendChild(msg1);
      emptyDiv.appendChild(msg2);
      menuGrid.appendChild(emptyDiv);
      return;
  }

  cartItems.forEach((item) => {
    const clone = cartTemplate.content.cloneNode(true);
    const img = clone.querySelector('.menu-img');
    const name = clone.querySelector('.menu-name');
    const price = clone.querySelector('.menu-price');
    const qtyText = clone.querySelector('.qty-text');
    const minusBtn = clone.querySelector('.minus');
    const plusBtn = clone.querySelector('.plus');

    img.src = item.image_url;
    img.alt = item.name_ko;
    name.textContent = item.name_ko;
    const itemTotalPrice = item.price * item.quantity;
    price.textContent = `${itemTotalPrice.toLocaleString('ko-KR')}원`;
    qtyText.textContent = `${item.quantity}개`;

    minusBtn.dataset.id = item.id;
    plusBtn.dataset.id = item.id;

    menuGrid.appendChild(clone);
  });

  const totalPrice = Array.from(cartItems.values()).reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
  const totalDiv = document.createElement('div');
  totalDiv.style.cssText = "grid-column: 1 / -1; background-color: #fff; padding: 20px; border-radius: 12px; text-align: right; font-size: 24px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 2px solid #2c3e50;";
    
  const labelSpan = document.createElement('span');
  labelSpan.textContent = '총 결제 금액: ';
    
  const priceSpan = document.createElement('span');
  priceSpan.style.color = '#e74c3c';
  priceSpan.textContent = `${totalPrice.toLocaleString('ko-KR')}원`;

  totalDiv.appendChild(labelSpan);
  totalDiv.appendChild(priceSpan);
    
  menuGrid.appendChild(totalDiv);

}

categoryBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');
        const targetCategory = event.target.dataset.category;
        let filteredItems = [];
        
        if (targetCategory === 'coffee') {
            filteredItems = menuItems.filter(item => 
                item.category === 'coffee'
            );
        } else if (targetCategory === 'tea') {
            filteredItems = menuItems.filter(item => 
                item.category === 'tea'
            );
        } else if (targetCategory === 'milk_tea') {
            filteredItems = menuItems.filter(item => 
                item.category === 'milk_tea'
            );
        } else if (targetCategory === 'non_coffee') {
            filteredItems = menuItems.filter(item => 
                item.category === 'non_coffee'
            );
        } else if (targetCategory === 'ade') {
            filteredItems = menuItems.filter(item => 
                item.category === 'ade'
            );
        } else if (targetCategory === 'juice') {
            filteredItems = menuItems.filter(item => 
                item.category === 'juice'
            );
        } else if (targetCategory === 'smoothie') {
            filteredItems = menuItems.filter(item => 
                item.category === 'smoothie'
            );
        } else if (targetCategory === 'cake') {
            filteredItems = menuItems.filter(item => 
                item.category === 'cake'
            );
        } else if (targetCategory === 'dessert') {
            filteredItems = menuItems.filter(item => 
                item.category === 'dessert'
            );
        } else if (targetCategory === 'bakery') {
            filteredItems = menuItems.filter(item => 
                item.category === 'bakery'
            );
        } else if (targetCategory === 'sandwich') {
            filteredItems = menuItems.filter(item => 
                item.category === 'sandwich'
            );
        } else if (targetCategory === 'brunch') {
            filteredItems = menuItems.filter(item => 
                item.category === 'brunch'
            );
        } else if (targetCategory === 'ice_cream') {
            filteredItems = menuItems.filter(item => 
                item.category === 'ice_cream'
            );
        }

        renderMenu(filteredItems);
    });
});

shoppingBtn.addEventListener('click', (event) => {
    categoryBtns.forEach(b => b.classList.remove('active')); 
    event.target.classList.add('active');

    renderCart(); 
});

menuGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('qty-btn')) {
        const id = event.target.dataset.id;
        const isPlus = event.target.classList.contains('plus');

        if (cartItems.has(id)) {
            const item = cartItems.get(id);
            
            if (isPlus) {
                item.quantity += 1;
            } else {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    cartItems.delete(id);
                }
            }
            renderCart();
        }
    }
});

const initialItems = menuItems.filter(item => item.category === 'coffee' || item.category === 'cold_brew');
renderMenu(initialItems);
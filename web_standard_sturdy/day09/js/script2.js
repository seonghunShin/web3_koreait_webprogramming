const message = '안녕하세요123';

console.log(message);

// 해당 문장에 JAVASCRIPT라는 단어가 들었는지 확인
// 특정 숫자가 들어있는가?
console.log(message.includes('123'));

// 숫자가 들어있는가?

// 문자열 검사하는  순간들이 많다

// 비밀번호를 설정

// 비밀번호가 8글자보다 작으면서
// 대문자를 무조건 2글자를 포함하면서
// 특수문자는 -, _만 포함해야 하면서
// 아이디와 동일하면 안되면서
// ...

// 정규표현식
// 특정 문자열 안에 hello가 들어있는가?
// message.includes('hello');
const message = 'hello javascript';

const result = message.match(/ORD-\d+/);

console.log(regex.test(message));

// i는 대소문자를 구분하지 않겠다.

const regex = /javascript/i;

console.log(regex.test('JavaScript'));
console.log(regex.test('JAVASCRIPT'));
console.log(regex.test('javascript'));

// g는 전체를 검색한다 라는 뜻

const message = '010-1234-5678';
const result = message.replace(/-/g, '');
console.log(result);

const emailRegex = /^[^\s@]+@[%\s@]+\.[^\s@]+$/;

// ^ 은 문자열의 시작
// $ 문자열의 끝
// [^\s@]+ 공백과 @가 아닌 특정 문자가 1개 이상 있어야 한다.
// @ 가 붙어야 한다.
// @ 다음에는 공백과 @가 아닌 문자가 1개 이상 있어야 한다.
// \. 그 문자열 다음에는 .이 붙어야 한다

console.log(emailRegex.test('test@example.com'));
console.log(emailRegex.test('testexample.com'));
console.log(emailRegex.test('test@'));


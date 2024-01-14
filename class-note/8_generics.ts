// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // number 10
// logText('하이'); // string 하이
// logText(true); // boolean true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('Hello');

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }


// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('abcde');
// logText(10);
// const num = logNumber(10);
// logText(true);


function logText<T>(text: T): T {
    console.log(text);
    return text;
}


const str = logText<string>('a');
str.split('');
const login = logText<boolean>(true)


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = { value: 10, selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function(text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength(['hi', 'abc'])

// 제네릭 타입 제한 2  -  정의된 타입 이용하기
interface LengthType {
    length: number;
}
// extends LengthType을 이용하여 logTextLength에 상속시켜 length: number 를 사용
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength(10);
// 문자열로 length를 지원하는 값만 받을 수 있음


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("price");
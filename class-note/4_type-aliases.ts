interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

var seho: Person = {
    name: '세호',
    age: 30,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}

// 타입은 확장이 불가능 <-> 인터페이스는 extends로 확장이 가능
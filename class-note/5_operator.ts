// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var sang: string | number | boolean;

function logMessage(value: string | number) {
    if(typeof value == 'number') {
        value.toLocaleString();
    }
    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     // someone.name;
//     // someone.skill;
//     // someone.age;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });


function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 40 });
askSomeone({ name: '캡틴', age: 100 }); // <== skill이 없기 때문에 &연산자가 사용 불가


// var woo: string | number | boolean;
// var capt: string & number & boolean;

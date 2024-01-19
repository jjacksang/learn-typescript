interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: "Iron Making"}
}
var tony = introduce();
console.log(tony.skill);  // <- Union type이기 때문에 오류
console.log(tony.name);


// 단언하여 사용하는 방법  사용을 추천하진 않음
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}


// type-guard 정의

function isDeveloper(target: Developer | Person): target is Developer {
    return(target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}
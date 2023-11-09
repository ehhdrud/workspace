class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    num = 123;
    getInfo() {
        console.log(`${this.name}은 ${this.age}살입니다`);
    }
}

const myInfo = new Person('서동경', 29);

myInfo.getInfo();

for (const prop in myInfo) {
    console.log(prop);
}

for (const method in myInfo) {
    if (typeof myInfo[method] === 'function') {
        console.log(method);
    }
}

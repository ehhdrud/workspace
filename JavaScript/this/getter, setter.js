const person = {
    firstName: 'DONGKYEONG',
    lastName: 'SEO',

    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

// Getter 호출
// 읽기(get) 동작을 훔쳐서 다른 동작을 만들어냄
console.log(person.fullName); // DONGKYEONG SEO

// Setter 호출
// 할당(set) 동작을 훔쳐서 다른 동작을 만들어냄
person.fullName = 'YEWON KEE';
console.log(person.firstName); // YEWON
console.log(person.lastName); // KEE

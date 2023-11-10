function 일반함수사용() {
    this.value = 1;

    setTimeout(function () {
        this.value++;
        console.log(`일반 함수 사용: ${this.value}`); // NaN
    }, 1000);
}

function 화살표함수사용() {
    this.value = 1;

    setTimeout(() => {
        this.value++;
        console.log(`화살표 함수 사용: ${this.value}`); // 2
    }, 1000);
}

const 일반함수인스턴스 = new 일반함수사용();
const 화살표함수인스턴스 = new 화살표함수사용();

function Person(name) {
    this.name = name;

    // 화살표 함수의 this는 상위 스코프인 Person 함수의 this와 동일하다.
    // 따라서 이 함수를 사용하여 인스턴스를 생성하면, 실제로는 전역 객체를 참조하게 된다.
    this.getName = () => {
        console.log(this.name);
    };
}

const person = new Person('서동경');
person.getName();

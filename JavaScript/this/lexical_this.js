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

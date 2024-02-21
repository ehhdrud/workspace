function* simpleGeneratorWithReturn() {
    yield 1;
    yield 2;
    yield 3;
    return 'Generator 실행 완료';
}

const generator = simpleGeneratorWithReturn();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

const result = generator.next();
if (result.done) {
    console.log(result.value); // 'Generator 실행 완료'
}

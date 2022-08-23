function fibonacci(num) {
let fib = 1;
const Result = [];

for (let i = 0; Result.length < num; i++) {
if(fib === 1) {
    Result.push(fib, fib);
    fib += Result[i]
}
else if(i === 1) {
    fib = fib + Result[i - 1] - 1;
    Result.push(fib)
}
else{
    fib = fib + Result[i - 1];
    Result.push(fib)
}}
    return Result
};

console.log(fibonacci(6));
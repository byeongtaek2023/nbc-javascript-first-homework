
// for문을 이용하여 숫자리스트의 숫자를 모두 더한 값을 총합 변수에 할당 후 console.log로 출력합니다.
let sum = 0;

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i=0; i< num.length ; i++){
    sum += num[i]
};

console.log(sum);

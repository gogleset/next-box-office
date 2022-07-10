// 계산기 헬퍼
// 평균값 구하기
function Avg (...nums){
    const numbers = [...nums].reduce((prev, next) => {
         return Number(prev) + Number(next);
    })
    return (numbers / [...nums].length).toFixed(1);
}


export { Avg }
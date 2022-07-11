// 계산기 헬퍼
// 평균값 구하기
function getAvg(...nums) {
    const numbers = [...nums].reduce((prev, next) => {
        return Number(prev) + Number(next);
    })
    return (numbers / [...nums].length).toFixed(1);
}

function getRandomNum(lower, upper) {
    if (typeof lower !== 'number' || typeof upper !== 'number') {
        return new Error('check params')
    };
    let result = []
    for (let i = lower; i < upper; i++) {
        let randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
        if (result.indexOf(randomNum) > -1) {
            i--;
        } else {
            result.push(randomNum);
        }
    }
    return result;
}


export { getAvg, getRandomNum }
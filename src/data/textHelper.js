export default class text {

    // 글자 중간에 띄어쓰기 없애주기
    static removeSpace(content) {
        console.log("text class removeSpace 함수 실행");
        const value = content;
        const reg = / /gi;
        console.log(value.replace(reg, ""));
        return value.replace(reg, "");
    }
}
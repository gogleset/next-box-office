import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);

// 날짜가져오기
const Days = {
    getday: () => {
        let now = dayjs();
        now.format("YYYYMMDD");
        let year = now.get("y");
        let month = parseInt(now.get("M")) + 1
        let day = parseInt(now.get("D")) - 1

        // 한자리수 월이면 0붙이기
        if (String(month).length == 1) {
            month = "0" + month;
        }
        if (String(day).length == 1) {
            day = "0" + day;
        }

        // console.log(`${year}${month}${day}`);
        return `${year}${month}${day}`;
    },
    // 출시 후 지금날짜 빼서 출시일 기준 몇일 지났는지 구하기
    getReleaseDay: (day) => {
        // 현재날짜
        let now = dayjs().format('YYYY-MM-DD');
        // 출시날짜
        let date = dayjs(day).format('YYYY-MM-DD');

        return dayjs(now).diff(date, 'day');
    },
    // 지난 주말 (일요일) 추출
    getLastWeekendDay: () => {
        const last = dayjs().weekday(0).format("YYYYMMDD");
        return last;
    },
    transYYMMDD: (day) => {
        let days = dayjs(day).format('YYYY-MM-DD');
        return days;
    },
}

export default Days;
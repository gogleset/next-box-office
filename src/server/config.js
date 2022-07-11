import day from '../data/day';
// 오늘 날짜 가져오기
let date = day.getday();
let weekDate = day.getLastWeekendDay();
console.log("weekData :::" + weekDate);

const config = {
    server: {
        port: 8080,
    },
    movie: {
        key: "d145fd2512b2f9be50d440aedfa4b898",
        targetDt: date,
        weekDt: weekDate,
    },
    movie_rank: {
        daily_url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?",
        week_url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?",

    },
    movie_detail: {
        detail_url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?",
    },
    nav: {
        movie_url: "https://openapi.naver.com/v1/search/movie.json",
        client_Id: "1pOYLjqzC8aaisNkT_Wt",
        client_Pw: "gVw0D2jlkc",
    }
}

export default config
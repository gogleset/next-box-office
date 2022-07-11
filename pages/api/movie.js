// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import config from "../../src/server/config"
import axios from 'axios';
import { getMovie, getMovieDetail, getMoviePoint } from './crawling'

export default async function handler(req, res) {
    let result = null;
   
    // 식별
    switch (req.query.identifier) {
        // 일간 박스오피스 순위
        case 'daily':
            try {
                const movieData = await axios.get(`${config.movie_rank.daily_url}key=${config.movie.key}&targetDt=${config.movie.targetDt}`);
                result = movieData.data;
                // console.log(result);
                return res.status(200).json(result.boxOfficeResult);
            } catch (e) {
                return res.status(404).json(e);
            }
            break;
        // 주간, 주말 박스오피스 순위
        case 'week':
            try {
                const movieData = await axios.get(`${config.movie_rank.week_url}key=${config.movie.key}&targetDt=${config.movie.weekDt}&weekGb=0`);
                result = movieData.data;
                // console.log(result);
                return res.status(200).json(result.boxOfficeResult);
            } catch (err) {
                return res.status(404).json(err);
            }
            break;
        // 네이버 영화 검색
        case 'detail':
            try {
                const movieData = await axios.get(`${config.movie_detail.detail_url}key=${config.movie.key}&movieCd=${req.query.movieCd}`);
                result = movieData.data;
                return res.status(200).json(result.movieInfoResult);
            } catch (e) {
                return res.status(404).json(e);
            }
            break;
        // 네이버 영화 검색
        case 'search':
            const movieName = encodeURIComponent(req.query.searchData);
            try {
                const movieData = await axios.get(`${config.nav.movie_url}?query=${movieName}`, {
                    headers: {
                        "X-Naver-Client-Id": config.nav.client_Id,
                        "X-Naver-Client-Secret": config.nav.client_Pw
                    }
                });
                result = movieData.data;
                return res.status(200).json(result);
            } catch (e) {
                return res.status(404).json(e);
            }
        // 코드로 크롤링한 데이터
        case 'crawling':
            console.log(req.query.code);
            let result;
            try {
                const getMovieData = await getMovie(`https://movie.naver.com/movie/bi/mi/basic.naver?code=${req.query.code}`);
                const getMovieDetails = await getMovieDetail(`https://movie.naver.com/movie/bi/mi/detail.naver?code=${req.query.code}`);
                const getMoviePoints = await getMoviePoint(`https://movie.naver.com/movie/bi/mi/point.naver?code=${req.query.code}`, `https://movie.naver.com/movie/bi/mi/pointWriteFormList.naver?code=${req.query.code}&type=after&isActualPointWriteExecute=false&isMileageSubscriptionAlready=false&isMileageSubscriptionReject=false`);
                result = {
                    movieData: getMovieData,
                    movieDetail: getMovieDetails,
                    moviePoint: getMoviePoints
                }
                return res.status(200).json(result);
            } catch (e) {
                return res.status(404).json(e);
            }
            break;
    }
}




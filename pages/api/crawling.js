import axios from 'axios';
// 제이쿼리 쓰는것처럼 html parsing
import cheerio from 'cheerio';
import Actors from '../../src/data/NewActors';

const getHtml = async (url) => {
    try {
        return await axios.get(url);
    } catch (err) {
        console.log(err);
    }
}
// 네이버 영화 html 크롤링
const getMovie = async (url) => {
    const html = await getHtml(url);
    // html 크롤링값 로드시키기
    const $ = cheerio.load(html.data, { xmlMode: true });
    const $article = $(".article");
    // &nbsp제거
    const re = new RegExp(String.fromCharCode(160), "g");
    let courses = [];
    $article.each((index, node) => {
        // console.log(node);
        // eq(n) 중복된 값 중 몇번째 값을 가져올지
        const poster = $(node).find(".poster > a > img:eq(1)").attr("src");
        const subTitle = $(node).find(".story_area > .h_tx_story").text().replace(/[\n\r]/g, "");
        const story = $(node).find(".story_area > .con_tx").text().replace(/[\n\r]/g, "").replaceAll("&nbsp;", " ");
        const netizenScore = $(node).find(".netizen_score .star_score em").text();
        const netizenCount = $(node).find(".netizen_score .user_count em").text();
        const specialScore = $(node).find(".special_score .star_score em").text();
        const specialCount = $(node).find(".special_score .user_count em").text();
        const photo = $(node).find("._Img").attr("src");

        courses.push({
            poster: poster,
            subtitle: subTitle,
            story: story,
            netizenScore: netizenScore,
            netizenCount: netizenCount,
            specialScore: specialScore,
            specialCount: specialCount,
            photo: photo,
        });
    });
    console.log(courses);
    return courses;
}

const getMovieDetail = async (url) => {
    const html = await getHtml(url);
    const $ = cheerio.load(html.data);
    const $thumb = $(".p_thumb");
    const $info = $(".p_info");
    let courses = [];

    $info.each((index, node) => {
        const name = $info.find(`.k_name:eq(${index})`).text();
        const nameEn = $info.find(`.e_name:eq(${index})`).text();
        const position = $info.find(`.p_part:eq(${index})`).text();
        const role = $info.find(`.pe_cmt span:eq(${index})`).text();
        const actors = new Actors(name, nameEn, position, role);
        courses.push(actors);
    });
    $thumb.each((index, node) => {
        const img = $thumb.find(`.p_thumb > a > img:eq(${index})`).attr("src");
        courses[index].img = img;
    });
    console.log(courses);
    return courses;
}

// 댓글, 코멘트 등등
const getMoviePoint = async (url, iframeUrl) => {
    const html = await getHtml(url);
    const iframeHtml = await getHtml(iframeUrl);
    const $ = cheerio.load(html.data);
    const $$ = cheerio.load(iframeHtml.data);
    const $article = $(".article");
    const $starReple = $(".score_reple");
    const $$iframeScoreReple = $$(".score_reple");
    const courses = {
        netizenId: [],
        netizenReple: [],
        starId: [],
        starReple: [],
    };

    $article.each((index, node) => {
        courses.manScore = $(node).find(`.graph_point:eq(0)`).text();
        courses.womanScore = $(node).find(`.graph_point:eq(1)`).text();
        courses.teenagerScore = $(node).find(`.graph_point:eq(2)`).text();
        courses.twentiesScore = $(node).find(`.graph_point:eq(3)`).text();
        courses.thirtiesScore = $(node).find(`.graph_point:eq(4)`).text();
        courses.fortiesScore = $(node).find(`.graph_point:eq(5)`).text();
        courses.fiftiesScore = $(node).find(`.graph_point:eq(6)`).text();
    });
    $starReple.each((index, node) => {
        const starReples = $(node).find(`p`).text();
        const starId = $(node).find(`dl`).text().replace(/[\t\n]/g, "");
        courses.starReple.push(starReples);
        courses.starId.push(starId);
    });
    $$iframeScoreReple.each((index, node) => {
        const netizenReple = $(node).find(`#_filtered_ment_${index}`).text().replace(/[\t\n]/g, "");
        const netizenId = $(node).find(`dl dt em a`).text().replace(/[\t\n]/g, "");
        courses.netizenId.push(netizenId)
        courses.netizenReple.push(netizenReple)
    });

    return courses;
}
export { getMovieDetail, getMovie, getMoviePoint }
// url에 아무거나 치면 여길로 들어간다 ex) localhost:3000/view/*
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'
import config from "../../../src/server/config"
import Image from "next/image"

// style
import styles from "../../../styles/movie_detail.module.scss";

//components
import Loading from "../../../src/components/Loading";
import Carousel from "../../../src/components/Carousel";
import Ychart from "../../../src/components/Ychart";
import DoughnutChart from "../../../src/components/DoughnutChart";



const Id = ({ posts }) => {
    console.log(posts);
    

    return <div className={styles.container}>
        {/* 네이버 크롤링 데이터가 있다면? */}
        {posts.searchData ? <div className={styles.inner_container}>
            <Image className={styles.box_movie_img} src={posts.crawlingData.movieData[0].poster || "https://via.placeholder.com/600/24f355"} alt={posts.searchData.items[0].title} width="203px" height="290px" onClick={() => {
                window.open(posts.searchData.items[0].link);
            }} />
            <ul className={styles.list_box}>
                <li className={styles.list_title}>
                    <h2>{posts.posts.movieInfo.movieNm}</h2>
                    <span>{posts.posts.movieInfo.movieNmEn}</span>
                </li>
                <li className={styles.directors}>
                    <span>감독: </span>
                    {posts.posts.movieInfo.directors.map((item, index) => (
                        <span key={index}>
                            {item.peopleNm}
                        </span>
                    ))}
                </li>
                <li className={styles.story}>
                    {/* <h3>
                        줄거리
                    </h3> */}
                    <span className={styles.story_subtitle}>
                        {posts.crawlingData.movieData[0].subtitle}
                    </span>
                    <span>
                        {posts.crawlingData.movieData[0].story}
                    </span>
                </li>
            </ul>
        </div> : <Loading />
        }
        {posts.crawlingData ? <div className={styles.actors}>
            <Carousel data={posts.crawlingData.movieDetail} />
        </div> : <div />}


        {posts.crawlingData ? <div className={styles.contents} style={{ background: `url(${posts.crawlingData.movieData[0].photo}) no-repeat center` }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: "center" }}>
                    <h3 style={{ margin: 0, textShadow: '0px 0px 15px #fff' }}>연령별 만족도</h3>
                    <Ychart data={posts.crawlingData.moviePoint} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: "center" }}>
                    <h3 style={{ margin: 0, textShadow: '0px 0px 15px #fff' }}>성별별 만족도</h3>
                    <DoughnutChart data={posts.crawlingData.moviePoint} />
                </div>
            </div>
        </div> : <Loading />}

    </div >
}
// // 
export async function getServerSideProps(context) {
    const { id, movie_Nm } = context.query;
    // console.log(movie_Nm);
    let posts = null;
    let url = null;
    let code = null;
    try {
        const data = await axios.get(process.env.NEXT_PUBLIC_MOVIE_URL, {
            params: {
                identifier: "detail",
                movieCd: id
            },
        });
        const searchData = await axios.get(process.env.NEXT_PUBLIC_MOVIE_URL, {
            params: {
                identifier: "search",
                searchData: movie_Nm
            }
        });
        // // 영화 코드 추출
        url = searchData.data.items[0].link;
        code = url.slice(url.lastIndexOf("=") + 1);
        const crawlingData = await axios.get(process.env.NEXT_PUBLIC_MOVIE_URL, {
            params: {
                identifier: "crawling",
                code: code
            }
        });
        posts = {
            posts: data.data,
            searchData: searchData.data,
            crawlingData: crawlingData.data,
        };
        console.log(posts);

        return {
            props: {
                posts
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export default Id
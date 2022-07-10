// 박스오피스 정보 출력
import React, { useEffect, useState } from 'react';
import router from 'next/router';

// scss
import styles from '../../styles/item_list.module.scss';
import Loading from './Loading';
// data-helper
import day from "../data/day";
import text from '../data/textHelper';

const ItemList = ({ list, identifier = "daily" }) => {
    const [lists, setList] = useState([]);

    useEffect(() => {
        if (list) {
            if (identifier === "daily") {
                setList(addReleaseDate(list.dailyBoxOfficeList));
            } else if (identifier === "week") {
                setList(addReleaseDate(list.weeklyBoxOfficeList));
            }
        }
    }, [list, identifier]);

    return (
        <table className="ui celled table" style={{ marginTop: 0, textAlign: 'center' }}>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>이름</th>
                    <th>신규진입여부</th>
                    <th>영화 개봉일</th>
                    <th>영화 개봉 누적일</th>
                    <th>일일 관객수</th>
                    <th>누적 관객수</th>
                    <th>스크린 수</th>
                </tr>
            </thead>
            <tbody>
                {lists ? lists.map((item, index) => (
                    <tr className={styles.contents} key={index} onClick={() => router.push(`/view/movie/${item.movieCd}?movie_Nm=${text.removeSpace(item.movieNm)}`)} style={{cursor: "pointer"}}>
                        <td >{item.rank}</td>
                        <td >{item.movieNm}</td>
                        <td>{item.rankOldAndNew}</td>
                        <td >{item.openDt}</td>
                        <td >{item.accumulateDate}일</td>
                        <td >{item.audiCnt}</td>
                        <td >{item.audiAcc}</td>
                        <td >{item.scrnCnt}</td>
                    </tr>
                )) : <Loading />}
            </tbody>
        </table>
    );
};

function addReleaseDate(data) {
    let result = data;
    console.log(data);
    result.map((item, index) => {
        let date = day.getReleaseDay(item.openDt);
        // 객체에 추가
        result[index].accumulateDate = date;
    });
    return result;
}

export default ItemList;
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import router, { useRouter } from 'next/router';

//components
import ItemList from '../src/components/ItemList';
import Loading from '../src/components/Loading';
import Nav from "../src/components/Nav";

export default function Week({ posts }) {

    const [list, setList] = useState(posts)
    return (
        <div >
            {/* html Head 설정 */}
            <Nav title="주말 영화 정보" infoTitle={"주말 박스오피스 순위"}></Nav>
            {posts ? <ItemList list={list} identifier={"week"} /> : <Loading />}
        </div >
    )
}


// SSG 정적 
export async function getStaticProps() {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_MOVIE_URL, {
            params: {
                identifier: "week"
            },
        });
        const data = res.data;
        return {
            props: {
                posts: data,
            },
        }
    } catch (err) {
        throw new Error(err);
    }
}
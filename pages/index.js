import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Header } from "semantic-ui-react"
import router, { useRouter } from 'next/router';

//components
import ItemList from '../src/components/ItemList';
import Loading from '../src/components/Loading';
import Nav from "../src/components/Nav";

export default function Home({ posts }) {
  console.log(useRouter());
  const [list, setList] = useState(posts)
  console.log(list);

  return (
    <div >
      {/* html Head 설정 */}
      <Nav title="일일 영화 정보" infoTitle={"일일 박스오피스 순위"}></Nav>
      {posts ? <ItemList list={list} /> : <Loading />}
    </div >
  )
}


// SSG 정적 
export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_MOVIE_URL, {
      params: {
        identifier: "daily"
      },
    });
    const data = res.data;
    console.log(data);
    return {
      props: {
        posts: data,
      },
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        posts: false
      },
    }
  }
}




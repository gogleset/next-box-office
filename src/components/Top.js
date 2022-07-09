import { Header } from "semantic-ui-react"
import { useRouter } from "next/router"
import Image from "next/image"
import Gnb from "./Gnb"

export default function Top() {
    const router = useRouter();
    console.log(router.pathname);
    return (<div>
        <div style={{ display: "flex" }}>
            <Image src="https://blog.kakaocdn.net/dn/bojGJR/btqB2uK0pvO/iOVp5O0J8iE5mepxqSNHm0/img.png" alt="logo" width="80px" height="80px" />
            <h2 as="h1">{router.pathname.indexOf("movie/[id]") > -1 ? "영화 API: 상세 정보" : "영화 API"}</h2>
        </div>
        {/* 메뉴바 */}
        <Gnb />

    </div>)


}
import Head from "next/head";
// 전역 CSS 선언
import '../styles/globals.css';
// sementic-ui
import 'semantic-ui-css/semantic.min.css';
// // Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../styles/carousel.scss';

import Top from '../src/components/Top';
import Footer from '../src/components/Footer';
// app.js
function MyApp({ Component, pageProps }) {
  // Component 속성값은 서버에 요청한 페이지가 된다. 페이지 전환 시 이 컴포넌트 프롭스가 변경된다.
  <Head>
    <title>진 | Home</title>
  </Head>
  // pageProps는 데이터 패칭 메서드를 통해 미리 가져온 초기 객체이다.
  // pageProps는 getInitialProps, getStaticProps, getServerSideProps 중 하나를 통해 페칭한 초기 속성값이 됩니다.
  // _app에서도 getInitialProps를 사용해 모든 페이지에서 사용할 공통 속성값을 지정할 수 있으나, 이럴 경우 자동 정적 최적화(Automatic Static Optimization)이 비활성화되어 모든 페이지가 서버 사이드 렌더링을 통해 제공됩니다.
  return (
    <div style={{ width: "1000px", margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp

/**
 * 페이지 전환시 레이아웃을 유지할 수 있다.
 * 페이지 전환 시 상태값을 유지할 수 있다.
 * componentDidCatch를 사용하여 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시키는게 가능하다.
 * 글로벌 CSS를 이곳에 선언
 * 즉, 페이지에 적용할 공통될 레이아웃의 역할
 */
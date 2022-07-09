import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <meta charSet="utf-8" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Head>
        </Html>
    )
}
// _document는 _app 다음에 실행되며, 공통적으로 활용할 <head> (메타태그)나 <body> 태그 안에 들어갈 내용들을 커스텀할때 활용한다.
// 폰트 import, charset, 웹 접근성 관련 태그들
// next에서 제공하는 페이지를 커스터마이징 할 수 있다.
// next에서 제공하는 페이지는 마크업을 건너뛰기 때문에 Html, Head, body부분을 커스터마이징 할려면 꼭 필요하다.
// app은 글로벌 css, layout 잡는데 쓰이지만,
//document는 언제나 서버에서 실행되므로 브라우저 api 또는 이벤트 핸들러가 포함된 코드는 실행되지 않고 또한 <Main /> 부분을 제외한 부분은 브라우저에서 실행되지 않으므로 이곳에 비즈니스 로직을 추가해서는 안되며, _app과 마찬가지로 getStaticProps와 getServerSideProps 를 통해 데이터를 불러올 수 없다.
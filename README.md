# Project Info & Purpose
- 통합 영화 정보 페이지 프로젝트
- Next.js 찍어 먹어보기

<img src="../box-office/styles/images/view.png" width="300px" height="300px" title="Github_Logo"/>



# Next.js 특징
1. React, Express.js, SSR 기능 지원
2. Route기능이 쉽고 직관적
3. Express.js 같은 내장 서버 지원
4. 클라이언트 사이드, 서버 사이드 기술을 가지고 있는 올인원 솔루션

### create-next-app 으로 설치하면
1. 컴파일과 번들링이 자동 (webpack 과 babel)
2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영
3. 서버사이드 렌더링 지원
4. 정적 파일을 지원

### 레이아웃은 
Semantic UI React : https://react.semantic-ui.com/ <br>
Chart Js : https://www.chartjs.org/
```
$ yarn add semantic-ui-react semantic-ui-css
$ yarn add chart.js react-chartjs-2
```

- _app.js에 import

## _app.js의 특징
 - 페이지 전환시 레이아웃을 유지할 수 있다.
 - 페이지 전환 시 상태값을 유지할 수 있다.
 - componentDidCatch를 사용하여 커스텀 에러 핸들링을 할 수 있다.
 - 추가적인 데이터를 페이지로 주입시키는게 가능하다.
 - 글로벌 CSS를 이곳에 선언
 

## 라우팅 및 _app.js 와 _document.js 의 차이점

1. _app.js에서는 페이지의 레이아웃과 전역 CSS 및 모든페이지에 적용되어야 하는 부분를 담당한다.
2. _document.js에서는 서버에서만 작동 되어야하며, onClick같은 이벤트 핸들러는 사용하지 말아야한다. (CSS 사용금지)

`!!! _document.js에서 사용하는 Head와 _app.js에서 사용하는 Head는 다르다. Head는 _app.js에서 넣거나 각각의 컴포넌트에 추가한다.`

---

## Next.js에서의 Route 방법
- pages 폴더 안에서 폴더, 파일 추가
  - ex) `/pages/` => pages 폴더 안에 있는 index.js 실행
  - ex) `/pages/about` => pages 폴더 안에 있는 about 폴더 안 index.js실행
  - ex) `/pages/about/home` => pages 폴더 안에 있는 about 폴더 안 home.js실행
  - ex) `/pages/about/1` =>  pages 폴더 안에 있는 about 폴더 안 [id].js실행(다이나믹 라우트)

### Dynamic Routes 사용 예시
```jsx
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```
- 만약 localhost:3000/view/* 라면 /*에 들어가는 모든 값이 쿼리스트링형식으로 받아올 수 있게된다.


#### [id].js 
- url에 아무거나 치면 여길로 들어간다. 물론 폴더명에 영향을 받는다. 만약 view 폴더 안에 있다면? localhost:3000/view/*


---


# .env
- 환경변수 설정 
- 다른 파일에선 process.env로 접근할 수 있다.
- NEXT_PUBLIC 옵션으로 브라우저에 접근 가능하다.(안붙히면 Node.js에만 접근가능)
- process.env는 표준 자바스크립트 객체가 아님, 구조 분해 할당 문법 사용불가능









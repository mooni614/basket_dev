### `npm start`
Open [http://localhost:3000](http://localhost:3000) 
만약에 npm start를 종료하고 다시 실행하고 시키면 
terminal에서 ctrl + c를 여러번 눌러주면 된다.

## 리액트 정리
node.js : 패키지 관리자 (리액트 이외 다양한 패키지 설치 가능)
    npx : 최신 패키지 설치이기 때문에 초반에 폴더 만들어줄 때 사용하는 명령어
    - npx create-react-app 폴더명

    npm : 전반적으로 build, test, start, install 등 다방면으로 사용하는 명령어
    - npm start : 프로젝트 시작하는 명령어 or npm run start, npm run dev 
    - npm install 패키지명



package.json : 간략한 사용설명서
package-lock.json : 자세히 적힌 사용설명서
README.md : 프로젝트에 대해 사람이 전반적으로 설명하는 공간
.gitignore : 깃허브에 파일을 업로드할 때 업로드하지 말아야 될 이름이나 확장자를 작성한다.

### 파일에 대해서 작성
    리액트는 초반에 index.html 파일만 바라본다.
    index.js에서 사용할 javascript파일을 불러온다.
    그다음 app.js 와 같은 파일을 만들어서 컴포넌트를 작성한다.
    파일의 이름은 개발자의 자유이다.


### 폴더구조
    >node_modules : 패키지 여기안에 react가 들어있다.
    >public : 가장 처음에 보여지는 폴더 
    >src : 우리가 원하는 코드를 작성하는 폴더


### 리액트의 장점
    Virtual DOM 이란? DOM을 추상화한 가상의 객체
    SPA(Single Page Application) -> 단일 페이지로 처리()
    웹으로 모바일 앱도 만들 수 있다.
    JSX(JavaScriptXml): 우리가 작성한 코드를 컴퓨터에 맞게 변환해준다.


### 컴포넌트 작성방법
function 이름 {
    스크립트 작성
    const [기본값, 변경될 값]=초기기본값;
    const 동작할이름 = () =>{
        변경될 값
    }
    ## 만약 input처럼 넣어줘야 하는 값이 있을 경우
    const 동작할이름2 = (event) =>{
        변경될 값(event.target.value);
    }
    스타일 작성

return(
    <div>{기본값}내용을 채워준다.</div>

);

}

export default 이름;"# basket_dev" 

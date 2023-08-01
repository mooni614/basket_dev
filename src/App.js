import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  /* 
  script 작성한다.
  css, js활동을 적는다.
  변수 선언, 상태 변경은 여기에서 진행한다.

  useState : 상태값 관리자
  - 초기값 세팅 관리, 값 변환 가능
  import { useState } from 'react';를 임포트한다.

  */

 // let count = 0;

 const [number, setNumber] = useState(0);
 const [time, setTime] = useState(0);
  //  const [초기값, 변환될 값] = 초기값(0);
  // 초기값({}) : 칸을 완전 비워놓는 것
  // state 
  // 컴포넌트 내부에서 선언한 값
  // setState를 통해서 내부값을 변경할 수 있다.

  const plus = () =>{ // 값이 증가하는 자바스크립트

    // count = count+1
    setNumber(number + 1);
    console.log(number);

  }

  const minus = () =>{ //값이 감소하는 자바스크립트

  //  count = count-1
  setNumber(number - 1);
    console.log(number);

  }

  const updateTime =()=> {
    setTime(time+1);
  }


  return (
  /* 
  html만 적는다.
  div는 한번만 선언할것
  */

    <div className="App">
      {/* <div className="App"> 은 
      html태그와 비슷한 역할을 한다.
      그래서 처음과 끝을 한 번 지정한다.
       
      자바스크립트에서는 onclick=()인데
      리액트에서 onClick={}라고 쓴다.
      
      위에서 값을 가져오기 위해서는 중괄호를 사용해서 변수값을 넣어준다.
       
       */}
        <h2>{number}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

        <h2>{time}시</h2>
        <button onClick={updateTime}>시간올리기</button>
    </div>


  );
}

export default App;

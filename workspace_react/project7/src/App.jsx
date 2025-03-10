import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Lotto from "./components/Lotto";
import Shop from "./components2/Shop";

function App() {
  // // 구조분해할당 (배열, 객체)
  // const arr = [1,2,3];
  // const [a,b,c] = arr; // 순서라는 개념이 있어서 차례대로 넣는거 가능

  // const person = {
  //   name : 'kim',
  //   age : 20,
  //   addr : 'ulsan',
  // };

  // const {name,age,addr} = person; // 객체는 순서라는 개념이 없기 때문에 key값을 맞춰주는것
  
  // function aaa({name,age}) { //{name,age} = person; 위와 같음
  //   console.log(name);
  //   console.log(age);
  // } // props와 동일한 방법

  return (
    <>
      {/* <Header hobby={'react'} age={20}/> */}
      <div>React</div>
      {/* <div className={'sss'} id="aaa">React</div> */}
      {/* <Counter/> */}
      {/* <Lotto/> */}
      <Shop/>
    </>
  );
}

export default App;

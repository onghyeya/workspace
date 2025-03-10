import "./App.css";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
// components폴더에 SideMenu파일안 SideMenu components을 가져오겠다.
import StateTest from "./components/StateTest";

function Header() {
  return (
    <div>
      <div>header</div>
    </div>
  );
}

function App() {
  let title = "오늘의 제목";
  let arr = [1, 2, 3];
  let person = {
    name: "kim",
    age: 20,
  };

  // num의 값이 3이상이면 div보이게
  let num = 3;
  
  return (
    // return안 내용은 'jsx 문법'
    // 배열은 출력 가능 , 객체는 데이터 하나하나만 출력가능
    <>
      <StateTest />
      {
        num>=3?<div>3 이상입니다</div>:''
      }
      <Header />
      <div className="title">{title}</div>
      <div>{10 + 20}</div>
      <div>{arr[0]}</div>
      <div>{person.name}</div>
      <div>hello</div>
      <SideMenu />
      <Footer />
    </>
  );
}

export default App;

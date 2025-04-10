import { useSelector } from "react-redux";
import "./App.css";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";

function App() {
  // store에 저장된 데이터 가져오기
  const data = useSelector((state) => {
    return state;
  });
  const data1 = useSelector((state) => state);
  console.log(data);
  console.log(data1);

  // 특정 key만 빼고 싶을 때
  const counter = useSelector((state) => state.counter);
  console.log(counter);


  return (
    <div>
      <div>reudx app({counter})</div>
      <div><Test1/></div>
      <div><Test2/></div>
      <div><Test3/></div>
    </div>
  );
}

export default App;

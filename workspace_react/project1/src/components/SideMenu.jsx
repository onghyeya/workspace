//rafce
//React Arrow Function component Expoaf
import React from "react";


const SideMenu = () => {
  // component 안에 이벤트를 동시에 여러개를 실행하고 변환 함수 선언
  function click() {
    console.log(3);
  }

  return (
    <>
      <div>SideMenu</div>

      {/* <button type="button" onClick={click()}>사이드버튼1</button>  */}
      {/* click() :  click함수를 호출 */}
      <button type="button" onClick={click}>사이드버튼2</button>
      {/* click  : click(이벤트)할때 실행  */}
    </>
  );
};

export default SideMenu;

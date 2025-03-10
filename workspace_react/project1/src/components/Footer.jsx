
// dom안에 바로 함수를 넣는 것 :  여기에서만 쓸거야 할대

function Footer() {
  return(
    <>
      <div>footer</div>
      <button type="button" onClick={() => {
        console.log('button click!');
      }}>버튼1</button>

      <button type="button" onMouseEnter={() => {
        console.log('5');
      }}>버튼2</button>

      <input type="text" onChange={() => {
        alert('!!!');
      }} />
    </>
  )
}

export default Footer
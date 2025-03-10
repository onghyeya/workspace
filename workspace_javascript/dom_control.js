
//react를 사용하지 않았을때의 방법(매우 까다롭고 어려움)
function test(){
                // html문서중 class가 my-ul 태그를 찾겠습니다. 
  const ul_tag = document.querySelector('.my-ul');
  data = '';
  for(let i = 0; i<1500; i++){
    data = data + `<li>${i}</li>`;
  }
  ul_tag.innerHTML = data; // 최소한만 건드리기 때문에 속도가 빠름 (이것이 react가 해주는 방법임.)

}
// ul 태그 안에 li 태그를 1500번 반복 시키겠습니다.
// ul_tag.innerHTML = ul_tag.innerHTML + `<li>${i}</li>` 
// > 직접적으로 for문에 넣게 되면 화면을 구성할때 속도 차이가 생김
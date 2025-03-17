
export const cartListData = [
  {
    id:1,
    item:'달걀 한 판'
  },
  {
    id:2,
    item:'라면 한 묶음'
  },
  {
    id:3,
    item:'주방 세제'
  },
]



// cartList 에서 id가 2인 데이터 찾기
// for(const e of cartList){
//   if (e.id == 2){
//     //찾음
//   }
// }

// // e : 배열에 있는 데이터 하나하나
// // find : return 에 작성한 조건문과 일치하는 데이터만 return 해준다.
// cartListData.find((e)=>{return e.id === 2})

// cartListData.find(e=>e.id===2) // 소괄호 , 중괄호 , return 생략했을 때

// // filter : return에 작성한 조건과 일치한 데이터를 제외( 걸러냄 )
// cartListData.filter((e)=>{return e.id !== 2})
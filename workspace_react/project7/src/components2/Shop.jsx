import axios from 'axios';
import React, { useState } from 'react'

const Shop = () => {
  // input 에서 입력한 값을 java에서 받아주기
  // java에서 받은 값을 다시 돌려줌
  const [shop,setShop]= useState({
    itemCode : 0
    ,itemName : ""
    ,itemPrice : 0
    ,itemIntro : ""
    ,regDate: ""
  });


  const sendItem = ()=>{
    axios.post("/api/shops",shop)
      .then((res)=>{
        console.log(res.data);
        alert('전송되었습니다.')
      })
      .catch((error)=>{
        console.log(error);
      })
  }


  const changeShop = (e)=>{
    setShop({
      ...shop
      ,[e.target.name] : e.target.value
    })
  }



  return (
    <>
      <div>
        <h2>shopping mall</h2>
        <table>
          <tbody>
            <tr>
              <td>상품명</td>
              <td> <input type="text" name='itemName' value={shop.itemName} onChange={(e)=>{
                changeShop(e)
              }} /></td>
            </tr>
            <tr>
              <td>상품 가격</td>
              <td> <input type="text" name='itemPrice' value={shop.itemPrice} onChange={(e)=>{
                changeShop(e)
              }}/></td>
            </tr>
            <tr>
              <td>상품내용</td>
              <td> <input type="text" name='itemIntro' value={shop.itemIntro} onChange={(e)=>{
                changeShop(e)
              }}/></td>
            </tr>
            <tr>
              <td>상품날짜</td>
              <td> <input type="date" name='regDate' value={shop.regDate} onChange={(e)=>{
                changeShop(e)
              }}/></td>
            </tr>
          </tbody>
        </table>
        <button type='button' onClick={(e)=>{
          sendItem(e)
        }}>전송버튼</button>
      </div>

      {/* <div>
      <table>
          <tbody>
            <tr>
              <td>상품명</td>
              <td> {shop.itemName}</td>
            </tr>
            <tr>
              <td>상품 가격</td>
              <td> {shop.itemPrice}</td>
            </tr>
            <tr>
              <td>상품내용</td>
              <td> {shop.itemIntro}</td>
            </tr>
            <tr>
              <td>상품날짜</td>
              <td> {shop.regDate}</td>
            </tr>
          </tbody>
        </table>
      </div> */}

    </>
  )
}

export default Shop
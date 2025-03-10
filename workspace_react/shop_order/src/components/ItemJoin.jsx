import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './ItemJoin.module.css'

const ItemJoin = () => {
  const nav = useNavigate();
  const [itemJoin,setItemJoin]=useState({
    itemName:""
    , itemPrice:0
    , seller:""
    , regDate:""
    , itemIntro:""
  });

  const changeItem = (e)=>{
    setItemJoin({
      ...itemJoin,
      [e.target.name]:e.target.value
    })
  }

  const validation = ()=>{
    // 둘다 참 일 경우 실행 의 반대 : 둘중 하나라도 거짓이면 실행 전체 결과 부정
    if (!(itemJoin.itemPrice && itemJoin.itemName) ) {
      alert('상품명과 가격 필수 입력')
      return
    }
  }
  

  const sendData = ()=>{
    if(validation())
      return
    axios.post('/api/items',itemJoin)
    .then((res)=>{alert('상품이 등록되었습니다')
      nav('/')
    })
    .catch(error=>console.log(error)
    )
  }
  return (
    <div className={styles.join_div}>
      <table>
        <tbody>
          <tr>
            <td>상품명</td>
            <td>
              <input className='my-input wide' type="text" name='itemName' value={itemJoin.itemName} onChange={(e)=>{
                changeItem(e)
              }} />
            </td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td>
              <input className='my-input wide' type="text"name='itemPrice' value={itemJoin.itemPrice} onChange={(e)=>{
                changeItem(e)
              }} />
            </td>
          </tr>
          <tr>
            <td>판매자</td>
            <td>
              <input className='my-input wide' 
              type="text" name='seller' value={itemJoin.seller} onChange={(e)=>{
                changeItem(e)
              }}/>
            </td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td>
              <textarea className='my-textarea wide' name='itemIntro' value={itemJoin.itemIntro} onChange={(e)=>{
                changeItem(e)
              }} ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <button type='button' className='my-button' onClick={(e)=>{sendData()}}>등록</button>
    </div>
  )
}

export default ItemJoin
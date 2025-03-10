import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import styles from './OrderList.module.css'

const OrderList = () => {
  const [orderList,setOrderList]=useState([]);

  useEffect(()=>{
    axios.get('/api/orders')
      .then(res=>{
        setOrderList(res.data)
      })
      .catch(error=>console.log(error)
      )
  },[])

  const totalPrice = ()=>{
    let sum = 0;
    for(let i =0; i<orderList.length; i++){
      sum = sum + orderList[i].buyPrice
    }
    return sum;
  }
console.log(totalPrice());

  return (
    <div className={styles.container}>
      <div>총 {orderList.length} 건의 주문정보가 검색되었습니다</div>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>상품명</th>
            <th>상품단가</th>
            <th>구매수량</th>
            <th>구매가격</th>
            <th>주문자</th>
            <th>주문일</th>
          </tr>
        </thead>
        <tbody>
          {orderList.length===0?
            <tr>
              <td colSpan={7}>등록된 주문 정보가 없습니다</td>
            </tr>
            :
            orderList.map((order,i)=>{
              return(
                <tr key={i}>
                <td>{orderList.length-i}</td>
                <td>{order.itemDTO.itemName}</td>
                <td>￦{order.itemDTO.itemPrice.toLocaleString()}</td>
                <td>{order.buyCnt}</td>
                <td>{order.buyPrice.toLocaleString()}</td>
                <td>{order.buyer}</td>
                <td>{dayjs(order.buyDate).format('YYYY-MM-DD')}</td>
              </tr> 
              )
            })
           
            }
        </tbody>
      </table>
      <div className={styles.total_price}>
        <div>총 주문금액</div>
        <div>￦{totalPrice().toLocaleString()}</div>
      </div>
    </div>
  )
}

export default OrderList
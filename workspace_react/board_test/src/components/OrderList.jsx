import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderList = ({setGoods,setIsShow}) => {
  const [orderList,setOrderList] = useState([]);

  useEffect(()=>{
    axios.get('/api/orderList')
      .then((res)=>{
        console.log(res.data);
        setOrderList(res.data);
      })
      .catch((error)=>{
        console.log('연결안됨');
        console.log(error);
      })
  },[])

  return (
    <>
      <table className='list-table'>
        <colgroup>
        <col width={'10%'}/>
        <col width={'40%'}/>
        <col width={'20%'}/>
        <col width={'10%'}/>
        <col width={'*'}/>
        </colgroup>
        <thead>
          <tr>
            <th>NO</th>
            <th>상품명</th>
            <th>상품가격</th>
            <th>수량</th>
            <th>총구매가격</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order,i)=>{
            return(
              <tr key={i} onClick={(e)=>{
                for(let i=0; i<orderList.length; i++){
                  if(orderList[i].goodNum == order.goodNum){
                    setGoods(orderList[i])
                  }
                }
                setIsShow(true)
              }}>
                <td>{orderList.length-i}</td>
                <td>{order.name}</td>
                <td>{order.price}원</td>
                <td>{order.cnt}</td>
                <td>{order.sumPrice}원</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default OrderList
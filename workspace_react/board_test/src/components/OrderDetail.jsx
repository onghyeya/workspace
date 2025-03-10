import React from 'react'

const OrderDetail = ({goods,isShow}) => {
  return (
    <>
    {isShow?
     <table className='detail-table'>
      <colgroup>
      <col width={"25%"}/>
      <col width={"25%"}/>
      <col width={"25%"}/>
      <col width={"25%"}/>
      </colgroup>
     <tbody>
       <tr>
         <td>상품번호</td>  
         <td>{goods.goodNum}</td>  
         <td>상품명</td>  
         <td>{goods.name}</td>  
       </tr>
       <tr>
         <td>가격</td>  
         <td>{goods.price}원</td>  
         <td>수량</td>  
         <td>{goods.cnt}</td>  
       </tr>
       <tr>
         <td>주문자ID</td>  
         <td>{goods.id}</td>  
         <td>구매금액</td>  
         <td>{goods.sumPrice}원</td>  
       </tr>
     </tbody>
   </table>
   :
   <table className='click'>
      <tbody>
        <tr>
          <td>▲ 위 주문목록 클릭시 주문상세정보가 나옵니다 ▲</td>
        </tr>
      </tbody>
    </table>
  }
     
    </>
  )
}

export default OrderDetail
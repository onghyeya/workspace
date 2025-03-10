import React, { useState } from "react";
import OrderList from "./OrderList";
import "./Order.css";
import OrderDetail from "./OrderDetail";

const OrderInfo = () => {
  const [goods,setGoods] = useState({});
  const [isShow,setIsShow] =useState(false);

  return (
    <>
      <div className="container">
        <div>
          <h2>주문목록</h2>
          <OrderList setGoods={setGoods} setIsShow = {setIsShow}/>
        </div>
        <div>
          <h2>주문상세정보</h2>
          <OrderDetail goods={goods} isShow={isShow}/>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;

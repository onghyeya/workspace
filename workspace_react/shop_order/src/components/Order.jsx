import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './Order.module.css'
import { useNavigate } from "react-router-dom";

const Order = () => {
  const nav =useNavigate();
  //상품 리스트 목록
  const [itemList, setItemList] = useState([]);
  // 입력한 정보를 저장하는 변수(화면을 기준으로 key값 설정)
  const [orderData, setOrderData] = useState({
    itemNum: ''
    ,price:'상품을 선택하세요'
    ,buyer: ""
    ,buyCnt: 1
  });

  console.log(orderData);
  
  // 상품 목록데이터 화면에 띄우기
  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        console.log(res.data);
        setItemList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // 주문 정보 입력 및 전송 e=select박스의 이벤트
  // input & select 변경 될때마다 실행될 함수
  const changeOrder = (e) => {

    // select박스를 건드렸을때만
    if(e.target.name === 'itemNum'){
      let itemPrice = 0;
      // itemList에 담긴 데이터 하나하나 item에
      for(const item of itemList){
        // 데이터를 받은 item의 num과 name이 itemNum과 일치하는 value값과 동일 할때 itemPrice를 가져옴
        if(item.itemNum == e.target.value){
          itemPrice = item.itemPrice
        }
      }      
      setOrderData({
        ...orderData,
        [e.target.name]: e.target.value,
        price : itemPrice
      });
      
      //  ,price : itemList.find((e)=>{return e.itemNum == e.target.value}).itemPrice
      //  itemList에서 e(item)를 뽑아 상품하나의 번호가 셀렉트 박스에서 뽑은 상품번호와 일치한 item 하나를 돌려줌
    }

    else{
      setOrderData({
        ...orderData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // 주문 등록 및 페이지 이동
  const insertOrderData = () => {
    axios
      .post("/api/orders", orderData)
      .then((res) => {
        nav('/order-list')
      })
      .catch((error) => console.log(error));
  };



  return (
    <div className={styles.order_div}>
      <h3>상품주문</h3>
      <table>
        <tbody>
          <tr>
            <td>주문 상품</td>
            <td>
              <select
                name="itemNum"
                value={orderData.itemNum}
                onChange={e => {
                  changeOrder(e)
                  // 상품 단가 input태그의 value도 변경 기능
                }}
              >
                <option value="">선택</option>
                {itemList.map((item, i) => {
                  return (
                    <option key={i} value={item.itemNum}>
                      {item.itemName}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td>상품단가</td>
            <td>
              <input className="my-input wide" type="text" readOnly={true} name='itemNum' value={orderData.price} onChange={e=>{changeOrder(e)}}/>
            </td>
          </tr>
          <tr>
            <td>주문자</td>
            <td>
              <input
                className="my-input wide"
                type="text"
                name="buyer"
                value={orderData.buyer}
                onChange={(e) => changeOrder(e)}
              />
            </td>
          </tr>
          <tr>
            <td>주문수량</td>
            <td>
              <input
                className="my-input wide"
                type="number"
                name="buyCnt"
                value={orderData.buyCnt}
                onChange={(e) => changeOrder(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="my-button"
        type="button"
        onClick={(e) => {
          insertOrderData();
        }}
      >
        주문하기
      </button>
    </div>
  );
};

export default Order;

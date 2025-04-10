import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cartSlice";

const Test3 = () => {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // 입력데이터 저장할 변수
  const [data,setData] = useState({
    cartNum:''
    ,itemName: ''
    ,price: ''
  })

  const handleData = (e)=>{
    setData({
      ...data,
      [e.target.name] :e.target.value
    })
  }

  return (
    <div>
      <div>
        {cartList.map((item, i) => {
          return (
            <div key={i}>
              <div>
                {item.cartNum} / {item.itemName} / {item.price}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div>
          장바구니 번호 : <input type="text" name="cartNum" value={data.cartNum} onChange={(e)=>{handleData(e)}} />
        </div>
        <div>
          상품명 : <input type="text"name="itemName" value={data.itemName} onChange={(e)=>{handleData(e)}} />
        </div>
        <div>
          가격 : <input type="text" name="price" value={data.price} onChange={(e)=>{handleData(e)}}/>
        </div>
        <button
          type="button"
          onClick={() => {
           dispatch(addCart(data))
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default Test3;

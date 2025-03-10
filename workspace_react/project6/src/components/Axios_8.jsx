import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Axios_8.css";

const Axios_8 = () => {
  // 입력한 모든 데이터를 자바의 console에 출력
  // 변수명 order로 바꾸자
  const [order, setOrder] = useState({
    foodSelect: "",
    cnt: 1,
    sumSelect: "토핑",
    call: "",
    date: "",
  });

  // console.log(order); 잘 입력이 되는지 확인

  const foodList = ["치킨", "피자", "족발"];

  const changeMenu = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {
    axios
      .post("/api/t9", order)
      .then((res) => {
        alert('주문이 완료 되었습니다!')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //key 값과 name 값이 같아야하는 이유는 서로 같아야 내가 지정한 변수의 key값을 변경 시킬수 있기때문이다.
  return (
    <>
      <div>Axios_8</div>
      <table className="container">
        <tbody>
          <tr>
            <td>음식선택</td>
            <td>
              <select
                name="foodSelect"
                value={order.foodSelect}
                onChange={(e) => {
                  console.log(e);
                  changeMenu(e);
                }}
              >
                <option value="">선택</option>
                {foodList.map((food, i) => {
                  return (
                    <option value={food} key={i}>
                      {food}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td>수량</td>
            <td>
              <input
                type="number"
                name="cnt"
                value={order.cnt}
                onChange={(e) => {
                  changeMenu(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>추가 선택</td>
            <td>
              <input
                type="radio"
                name="sumSelect"
                value="토핑"
                checked={order.sumSelect === "토핑"}
                onChange={(e) => {
                  changeMenu(e);
                }}
              />{" "}
              토핑추가
              <input
                type="radio"
                name="sumSelect"
                value="음료"
                checked={order.sumSelect === "음료"}
                onChange={(e) => {
                  changeMenu(e);
                }}
              />{" "}
              음료추가
              <input
                type="radio"
                name="sumSelect"
                value="공기밥"
                checked={order.sumSelect === "공기밥"}
                onChange={(e) => {
                  changeMenu(e);
                }}
              />{" "}
              공기밥추가
            </td>
          </tr>
          <tr>
            <td>요청사항</td>
            <td>
              <textarea
                name="call"
                value={order.call}
                onChange={(e) => {
                  changeMenu(e);
                }}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>주문일시</td>
            <td>
              <input
                type="date"
                name="date"
                value={order.date}
                onChange={(e) => {
                  changeMenu(e);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* 버튼 누르면 java에 전송 */}
      <div className="button-div">
        <button
          type="button"
          onClick={(e) => {
            sendData();
          }}
        >
          전송
        </button>
      </div>
    </>
  );
};

export default Axios_8;

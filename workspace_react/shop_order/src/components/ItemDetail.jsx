import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({updateItem,setUpdateItem,cnt,setCnt}) => {
  
  const changeItem = (e) => {
    setUpdateItem({
      ...updateItem,
      [e.target.name]: e.target.value,
    });
  };

  const updateData = () => {
    axios
      .put(`/api/items/${updateItem.itemNum}`, updateItem)
      .then((res) => {
        alert("수정되었습니다")
        // 게시글 목록을 다시 조회한다.
        setCnt(cnt+1)
      })
      .catch((error) => console.log(error));
  };

  
 

  return (
    <div className={styles.item_detail}>
      <h3>상품 상세 정보</h3>
      <table>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                readOnly = {true}
                value={updateItem.itemNum}
              />
            </td>
          </tr>
          <tr>
            <td>상품명</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                name="itemName"
                value={updateItem.itemName}
                onChange={(e) => {
                  changeItem(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                name="itemPrice"
                value={updateItem.itemPrice}
                onChange={(e) => {
                  changeItem(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>판매자</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                readOnly
                // name="seller"
                value={updateItem.seller}
                // onChange={(e) => {
                //   changeItem(e);
                // }}
              />
            </td>
          </tr>
          <tr>
            <td>상품등록일</td>
            <td>
              <input
                type="text"
                className="my-input wide"
                readOnly
                value={dayjs(updateItem.regDate).format("YYYY-MM-DD")}
              />
            </td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td>
              <textarea
                className="my-textarea wide"
                name="itemIntro"
                value={updateItem.itemIntro}
                onChange={(e) => {
                  changeItem(e);
                }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          type="button"
          className="my-button"
          onClick={(e) => {
            updateData();
          }}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;

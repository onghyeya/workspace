import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import styles from "./ItemList.module.css";

const ItemList = () => {
  // 목록 조회 변수
  const [itemList, setItemList] = useState([]);
  // 상세정보 및 수정 변수
  const [updateItem, setUpdateItem] = useState(null);
  // 상세 정보 수정시 바뀔 데이터
  const [cnt,setCnt] = useState(0);
  
  // 게시글 목록 조회
  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        setItemList(res.data);
      })
      .catch((error) => console.log(error));
  }, [cnt]);

  const getItem = (itemNum)=>{
    axios
      .get(`/api/items/${itemNum}`)
      .then((res) => {
        console.log(res.data);
        setUpdateItem(res.data);
      })
      .catch((error) => console.log(error));
  }

  return (
      <div className={styles.container}>
        <div className={styles.item_list}>
          <h3>상품 목록</h3>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>상품명</th>
                <th>상품가격</th>
                <th>판매자</th>
              </tr>
            </thead>
            <tbody>
              {itemList.length===0?
              <tr>
                <td colSpan={4}>등록된 상품이 없습니다</td>
              </tr>
              :itemList.map((item, i) => {
                return (
                  <tr
                    key={i}
                    onClick={(e) => {getItem(item.itemNum)
                    }}
                  >
                    <td>{itemList.length - i}</td>
                    <td>{item.itemName}</td>
                    <td>￦{item.itemPrice.toLocaleString()}</td>
                    <td>{item.seller}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div> 총 {itemList.length} 개의 상품이 등록 되었습니다</div>
        </div>
        <div className={styles.detail_div}>
          {/* {isShow ? <ItemDetail itemNum={itemNum} /> : null} */}
          {updateItem && <ItemDetail updateItem={updateItem} setUpdateItem={setUpdateItem} cnt={cnt} setCnt={setCnt}/>}
        </div>
      </div>
   
  );
};

export default ItemList;

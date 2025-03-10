import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./ShopMenu.module.css";

const ShopMenu = () => {
  const nav = useNavigate();
  return (
    <div className={styles.order_menu_div}>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(data) => {
              return data.isActive ? styles.active : ""
            }}
          >
            상품정보
          </NavLink>
          {/* 현재 선택된 link에 css 적용 기능 제공 */}
        </li>
        <li>
          <NavLink
            to={"/join"}
            className={(data) => {
              return data.isActive ? styles.active : ""
              
            }}
          >
            상품등록
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/order"}
            className={(data) => {
              return data.isActive ? styles.active : ""
            }}
          >
            주문하기
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/order-list"}
            className={(data) => {
              return data.isActive ? styles.active : ""
            }}
          >
            주문목록
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ShopMenu;

// 카운트
import React, { useState } from "react";

const Controller = ({changeCnt}) => {

  return (
    <>
      <div>
        <button
          type="button"
          onClick={(e) => {
            changeCnt(-1);
          }}
        >
          -1
        </button>
        <button
          type="button"
          onClick={(e) => {
            changeCnt(-10);
          }}
        >
          -10
        </button>
        <button
          type="button"
          onClick={(e) => {
            changeCnt(-100);
          }}
        >
          -100
        </button>
        <button
          type="button"
          onClick={(e) => {
            changeCnt(100);
          }}
        >
          100
        </button>
        <button
          type="button"
          onClick={(e) => {
            changeCnt(10);
          }}
        >
          10
        </button>
        <button
          type="button"
          onClick={(e) => {
            changeCnt(1);
          }}
        >
          1
        </button>
      </div>
    </>
  );
};

export default Controller;

import axios from "axios";
import React from "react";

const LottoNum = (props) => {
  // 버튼 클릭시 자바에서 1-45 랜덤한 정수 받아오는 함수

   const getLottoNum = (index) => {
      axios.get('/api/getLottoNum')
        .then((res)=>{
          console.log(res.data);
          const copyLotto = [...props.lotto];
          copyLotto[index] = res.data;
          props.setLotto(copyLotto);
        })
        .catch((error)=>{
          console.log('쵸비상!!!');
          console.log(error);
          
        })
    };
  return (
    <>
        <div className="num">
          <div className="display">{props.lottoNum}</div>
          <button type="button" className="btn-div" onClick={(e)=>{
            getLottoNum(props.i)
          }}>생성</button>
        </div>
    </>
  );
};

export default LottoNum;

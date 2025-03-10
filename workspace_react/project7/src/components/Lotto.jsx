import React, { useState } from "react";
import "./Lotto.css";
import axios from "axios";
import LottoNum from "./LottoNum";

const Lotto = () => {
  // 로또번호를 저장하는 state 변수
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0]);

  return (
    <>
      <h2>로또 자동 번호 생성기</h2>
      <div className="lotto">
        {lotto.map((lottoNum, i) => {
          return (
            <LottoNum
              key={i}
              lottoNum={lottoNum}
              lotto={lotto}
              setLotto={setLotto}
              i={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default Lotto;

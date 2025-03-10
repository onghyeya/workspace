import React, { useState } from "react";

const Detail = ({ board , isShow}) => {
  return (
    <>
      {isShow ? (
        <table className="detail-table">
          <colgroup>
            <col width={"20%"} />
            <col width={"30%"} />
            <col width={"20%"} />
            <col width={"30%"} />
          </colgroup>
          <tbody>
            <tr>
              <td>글번호</td>
              <td>{board.no}</td>
              <td>작성자</td>
              <td>{board.name}</td>
            </tr>
            <tr>
              <td>글제목</td>
              <td>{board.subject}</td>
              <td>조회수</td>
              <td>{board.cnt}</td>
            </tr>
            <tr>
              <td>글내용</td>
              <td colSpan={3}>{board.info}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default Detail;

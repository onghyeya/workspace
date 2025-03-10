import React from "react";
import "./Test_4.css";

const Test_4 = () => {
  const boardList = [
    {
      boardNum: 1,
      title: "첫번째 글",
      writer: "김자바",
      createDate: "2025-01-13",
      readCnt: 5,
    },
    {
      boardNum: 2,
      title: "두번째 글",
      writer: "김자바",
      createDate: "2025-01-17",
      readCnt: 3,
    },
    {
      boardNum: 3,
      title: "세번째 글",
      writer: "이자바",
      createDate: "2025-01-10",
      readCnt: 0,
    },
    {
      boardNum: 4,
      title: "네번째 글",
      writer: "이자바",
      createDate: "2025-01-19",
      readCnt: 10,
    },
    {
      boardNum: 5,
      title: "다섯번째 글",
      writer: "이자바",
      createDate: "2025-01-01",
      readCnt: 1,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>NO</th>
          <th>글번호</th>
          <th>글 제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        {boardList.map((list, i) => {
          return (
            <tr key={i}>
              <td>{boardList.length - i}</td>
              <td>{list.boardNum}</td>
              <td>{list.title}</td>
              <td>{list.writer}</td>
              <td>{list.createDate}</td>
              <td>{list.readCnt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Test_4;

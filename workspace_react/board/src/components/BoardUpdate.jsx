import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./BoardUpdate.module.css"

const BoardUpdate = () => {
  const nav = useNavigate();
  const { boardNum } = useParams();
  const [boardInfo, setBoardInfo] = useState({});

  const changeBoard = (e) => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`/api/boards/${boardNum}`)
      .then((res) => {
        setBoardInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [boardNum]);

  const sendData = () => {
    axios
      .put(`/api/boards/${boardNum}`, boardInfo)
      .then((res) => {
        alert("게시글 수정이 완료되었습니다");
        nav(`/detail/${boardNum}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div >
      <table className={styles.update_table}>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{boardInfo.regDate}</td>
            <td>작성자</td>
            <td>{boardInfo.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}>
              <input
                type="text"
                name="title"
                value={boardInfo.title}
                onChange={(e) => {
                  changeBoard(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={3}>
              <input
                type="text"
                name="content"
                value={boardInfo.content}
                onChange={(e) => {
                  changeBoard(e);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="update-button">
        <button
          type="button"
          onClick={(e) => {
            nav(`/detail/${boardNum}`);
          }}
        >
          뒤로가기
        </button>
        <button
          type="button"
          onClick={(e) => {
            sendData();
          }}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default BoardUpdate;

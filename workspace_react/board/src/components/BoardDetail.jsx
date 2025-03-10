import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import DetailReply from "./DetailReply";
import styles from "./BoardDetail.module.css";

// boardDetail.regDate
// console.log(dayjs(boardDetail.regDate).format('YYYY-MM-DD'));

const BoardDetail = () => {
  const nav = useNavigate();
  const { boardNum } = useParams();
  // 게시물 상세정보
  const [boardDetail, setBoardDetail] = useState({});
  // 댓글 목록 정보
  const [replyList, setReplyList] = useState([]);
  // 등록할 댓글 정보
  const [replyInfo, setReplyInfo] = useState({
    content: "",
    writer: "",
    boardNum: boardNum,
  });

  useEffect(() => {
    axios
      .get(`/api/boards/${boardNum}`)
      .then((res) => {
        setBoardDetail(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [num, setNum] = useState(0);
  //의존성 배열 마운트 될때 , num 값이 변경될때 실행
  useEffect(() => {
    axios
      .get(`/api/replies/${boardNum}`)
      .then((res) => {
        setReplyList(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [num]);

  //조회 쿼리 여러개 동시 실행하기
  // useEffect(() => {
  //   axios
  //     .all([
  //       axios.get(`/api/boards/${boardNum}`),
  //       axios.get(`/api/replies/${boardNum}`),
  //     ])
  //     .then(
  //       axios.spread((res1, res2) => {
  //         setBoardDetail(res1.data), setReplyList(res2.data);
  //       })
  //     )
  //     .catch((error) => console.log(error));
  // }, []);

  // 게시물 삭제 기능

  const deleteBoard = () => {
    if (!confirm("삭제 하시겠습니까?")) {
      return;
    }
    axios
      .delete(`/api/boards/${boardNum}`)
      .then((res) => {
        nav("/");
      })
      .catch((error) => {});
  };

  const changeReplyInfo = (e) => {
    setReplyInfo({
      ...replyInfo,
      [e.target.name]: e.target.value,
    });
  };

  // 댓글 등록 기능
  const sendReplyData = () => {
    axios
      .post(`/api/replies`, replyInfo)
      .then((res) => {
        setNum(num + 1);
        setReplyInfo({
           ...replyInfo
           , writer: ""
           , content: "" 
        });
      })
      .catch((error) => console.log(error));
  };

  // 삭제후 다시 댓글 목록 조회
  const deleteReply = (replyNum) => {
    axios
      .delete(`/api/replies/${replyNum}`)
      .then((res) => {
        setNum(num+1)
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className={styles.detail_container}>
        <div>
          <table className={styles.detail_table}>
            <tbody>
              <tr>
                <td>작성일</td>
                <td>
                  {dayjs(boardDetail.regDate).format("YYYY-MM-DD HH:mm:ss")}
                </td>
                <td>작성자</td>
                <td>{boardDetail.writer}</td>
                <td>조회수</td>
                <td>{boardDetail.readCnt}</td>
              </tr>
              <tr>
                <td>제목</td>
                <td colSpan={5}>{boardDetail.title}</td>
              </tr>
              <tr>
                <td>내용</td>
                <td colSpan={5}>{boardDetail.content}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-div">
          <button
            type="button"
            onClick={(e) => {
              nav("/");
            }}
          >
            목록가기
          </button>
          <button
            type="button"
            onClick={(e) => {
              nav(`/update/${boardNum}`);
            }}
          >
            수정
          </button>
          <button
            type="button"
            onClick={(e) => {
              deleteBoard()
            }}
          >
            삭제
          </button>
        </div>
      </div>

      <div className="container">
        <div className={styles.reg_reply_div}>
          <input
            type="text"
            placeholder="작성자"
            name="writer"
            value={replyInfo.writer}
            onChange={(e) => changeReplyInfo(e)}
          />
          <input
            type="text"
            placeholder="댓글 작성"
            name="content"
            value={replyInfo.content}
            onChange={(e) => changeReplyInfo(e)}
          />

          <button type="button" onClick={(e) => sendReplyData()}>
            댓글 등록
          </button>
        </div>

        {replyList.map((reply, i) => {
          return (
            <div key={i} className={styles.reg_reply_content_box}>
              <div>
                <span>| {reply.writer} |</span>
                <span>
                  {dayjs(reply.regDate).format("YYYY-MM-DD HH:mm:ss")}
                </span>
              </div>
              <div className={styles.reply_content}>
                <div>{reply.content}</div>
                <button
                  type="button"
                  onClick={(e) => {
                    deleteReply(reply.replyNum)
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoardDetail;

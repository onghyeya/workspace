import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./BoardDetail.module.css";

const DetailReply = () => {
  const nav = useNavigate();
  const { boardNum } = useParams();
  const [reply, setReply] = useState({});
  const [replyList, setReplyList] = useState([]);
  const [replyNum,setReplyNum]=useState(0);

  // 댓글 목록 조회
  useEffect(() => {
    axios
      .get(`/api/replies/${boardNum}`)
      .then((res) => {
        setReplyList(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const changeReply = (e) => {
    setReply({
      ...reply,
      [e.target.name]: e.target.value,
    });
  };

  const sendReplyData = () => {
    axios
      .post(`/api/replies/${boardNum}`, reply)
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
    };

  const deleteReply = () => {
    axios
    .delete(`/api/replies/${boardNum}/${replyNum}`)
    .then((res) => {console.log(res.data);
    })
    .catch(error => console.log(error));
  };

  return (
    <>
      <div className="container">
        <div className={styles.reg_reply_div}>
          <input
            type="text"
            placeholder="작성자"
            name="writer"
            value={reply.writer}
            onChange={(e) => {
              changeReply(e);
            }}
          />
          <input
            type="text"
            placeholder="댓글 작성"
            name="content"
            value={reply.content}
            onChange={(e) => {
              changeReply(e);
            }}
          />

          <button
            type="button"
            onClick={(e) => {
              sendReplyData();
            }}
          >
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
                    setReplyNum(reply.replyNum)
                    deleteReply()
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

export default DetailReply;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import styles from "./BoardList.module.css";

const BoardList = () => {
  const nav = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/boards")
      .then((res) => {
        console.log(res.data);
        setBoardList(res.data);
      })
      .catch((error) => {
        console.log("입구컷!");
        console.log(error);
      });
  }, []);

  // const [data,setData]=useState({
  //   age:""
  //   ,name:""
  // })
  
  // const changeParams = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   });
  // };


  // 검색창에 입력한 데이터를 저장할 변수
  const [searchData,setSearchData]=useState({
    searchKeyword:'TITLE'
    ,searchValue:''
  });

  const changeSearchData=(e)=>{
    setSearchData({
      ...searchData
      ,[e.target.name]:e.target.value
    })
  }

  const searchList = ()=>{
    axios.get(`/api/boards?searchKeyword=${searchData.searchKeyword}&searchValue=${searchData.searchValue}`)
      .then(res=>setBoardList(res.data))
      .catch(error=>console.log(error)
      )
  }
  
  return (
    <>
      <div className={styles.list_container}>
        <div className={styles.search}>
          <div>
            <select name="searchKeyword" value={searchData.searchKeyword} onChange={e=>{changeSearchData(e)}}>
              <option value={"TITLE"}>제목</option>
              <option value={"WRITER"}>작성자</option>
            </select>
            <input type="text" name="searchValue" value={searchData.searchValue} onChange={e=>{changeSearchData(e)}} />
            <button type="button" onClick={e=>{searchList()}}>검색</button>
          </div>
        </div>

        <table className={styles.list_table}>
          <thead>
            <tr>
              <td>NO</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
              <td>조회수</td>
            </tr>
          </thead>
          <tbody>
            {boardList.length===0?
            <tr>
              <td colSpan={5}>등록된 데이터가 없습니다</td>
            </tr>
            :boardList.map((board, i) => {
              return (
                <tr key={i}>
                  <td>{boardList.length - i}</td>
                  <td>
                    <span
                      onClick={(e) => {
                        nav(`/detail/${board.boardNum}`);
                      }}
                    >
                      {board.title}
                    </span>
                  </td>
                  <td>{board.writer}</td>
                  <td>{dayjs(board.regDate).format("YYYY-MM-DD")}</td>
                  <td>{board.readCnt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            nav("/write");
          }}
        >
          글쓰기
        </button>
        {/* 나이 이름 입력값을 Query String 방식으로 버튼 클릭시 /test url로 전달하세요 */}
        {/* <div>Query String 실습</div>
        <div>
          이름 :{" "}
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => {
              changeParams(e)
            }}
          />
        </div>

        <div>
          나이 :{" "}
          <input
            type="text"
            name="age"
            value={data.age}
            onChange={(e) => {
              changeParams(e)
            }}
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            nav(`/test?name=${data.name}&age=${data.age}`)
          }}
        >
          Query String 실행
        </button> */}
      </div>
    </>
  );
};

export default BoardList;

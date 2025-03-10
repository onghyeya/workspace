import React, { useState } from "react";
import './Test2.css'

const Test2 = () => {
  const [info, setInfo] = useState({
    name: "",
    mail: "",
    password: "",
    major: "",
    gender: "남자",
    intro: "",
  });

  const changeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>이름</td>
            <td>
              <input
                name="name"
                type="text"
                value={info.name}
                onChange={(e) => {
                  changeInfo(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                name="mail"
                type="text"
                value={info.mail}
                onChange={(e) => {
                  changeInfo(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                name="password"
                type="password"
                value={info.password}
                onChange={(e) => {
                  changeInfo(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>학과</td>
            <td>
              <select
                name="major"
                value={info.major}
                onChange={(e) => {
                  changeInfo(e);
                }}
              >
                <option value="">학과를 선택하세요</option>
                <option value="돼지고기과">돼지고기과</option>
                <option value="소고기과">소고기과</option>
                <option value="닭고기과">닭고기과</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="남자"
                checked={info.gender === "남자"}
                onChange={(e) => {
                  changeInfo(e);
                }}
              />{" "}
              남자
              <input
                type="radio"
                name="gender"
                value="여자"
                checked={info.gender === "여자"}
                onChange={(e) => {
                  changeInfo(e);
                }}
              />{" "}
              여자
            </td>
          </tr>
          <tr>
            <td>자기소개</td>
            <td>
              <textarea
                cols='40'
                rows='8'
                name="intro"
                value={info.intro}
                onChange={(e) => {
                  changeInfo(e);
                }}
                
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <p>이름 : {info.name} </p>
        <p>이메일 : {info.mail}</p>
        <p>비밀번호 : {info.password}</p>
        <p>학과 : {info.major}</p>
        <p>성별 : {info.gender}</p>
        <div>자기소개 : <pre>{info.intro}</pre></div>
      </div>
    </>
  );
};

export default Test2;

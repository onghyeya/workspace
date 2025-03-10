import { Route, Routes } from "react-router-dom";
import "./App.css";
import MemberList from "./components/MemberList";
import Join from "./components/Join";
import { useState } from "react";
import Detail from "./components/Detail";
import Update from "./components/Update";

function App() {

  return (
    <>
      <div>
        <h1>회원 관리 프로그램</h1>

        <Routes>
          {/* 회원 목록 페이지 */}
          <Route path="" element={<MemberList />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail/:memId" element={<Detail />} />
          <Route path="/update/:memId" element={<Update/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

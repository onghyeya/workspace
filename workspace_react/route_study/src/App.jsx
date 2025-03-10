import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import BoardList from './components/BoardList'
import BoardDetail from './components/BoardDetail'
import Login from './components/Login'


function App() {
  // useNavigate => Link를 대체 할 수 있다.
  // useNavigate() hook 은 페이지 이동기능을 제공하는 함수를 리턴.
  const nav = useNavigate();

  return (
    <>
      <Header/>
           
      {/*    바뀌는 내용을 쓰는 곳 ▼   */}
      <Routes>
      
        {/* 게시글 목록 페이지 */}
        <Route path='' element={<BoardList/>}/>
        
        {/* 게시글 상세 페이지 */}
        <Route path='/detail/:itemCode/:age' element={<BoardDetail/>}/>

        {/* 게시글 등록 페이지 */}
        
        {/* 게시글 수정 페이지 */}
        
        {/* 로그인 페이지 */}
        <Route path='/login' element={<Login/>}/>

        {/* 마이 페이지 */}
        <Route path='/my-page' element={<div>마이 페이지 입니다.</div>}/>
      </Routes>

      {/* 버튼 클릭 시 페이지 이동 - Link 태그 전체 감싸는 코드는 쓰지 않는다.*/}
      {/* Link 는 태그 안에 내용을 클릭해야만 실행됨. */}
      <button type='button' onClick={(e)=>{nav('/my-page')}}>마이 페이지로 이동</button>
    </>
  )
}

export default App

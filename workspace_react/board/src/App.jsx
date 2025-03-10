import { Route, Routes } from 'react-router-dom'
import './App.css'
import BoardWrite from './components/BoardWrite'
import BoardDetail from './components/BoardDetail'
import BoardUpdate from './components/BoardUpdate'
import BoardList from './components/BoardList'
import QueryString from './components/QueryString'

function App() {

  return (
    <>
      <div className='container'>
        <h2>게시글 프로젝트</h2>
          <Routes>
            <Route path='/' element={<BoardList/>}/>
            <Route path='/write' element={<BoardWrite/>}/>
            <Route path='/detail/:boardNum' element={<BoardDetail/>}/>
            <Route path='/update/:boardNum' element={<BoardUpdate/>}/>
            {/* 쿼리 스트링 연습 페이지 */}
            <Route path='/test' element={<QueryString/>} />
          </Routes>
      </div>
    </>
  )
}

export default App

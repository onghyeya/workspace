import { Route, Routes } from 'react-router-dom'
import './App.css'
import ItemList from './components/ItemList'
import ItemJoin from './components/ItemJoin'
import ShopMenu from './components/ShopMenu'
import Order from './components/Order'
import OrderList from './components/OrderList'

function App() {
  // falsy : false로 판단하는 내용
  // null , undefined, 0, '' >> falsy
  // truthy : falsy한 데이터 빼고 전부
  
  // const data = 'java';
  // const data1 = 'python';
  // if(data){
  //   console.log(data&&data1);
    
  // }

  return (
    <div className='app'>
      <div>
        <ShopMenu/>
      </div>
      <Routes>
        <Route path='/' element={<ItemList/>}/>
        <Route path='/join' element={<ItemJoin/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/order-list' element={<OrderList/>}/>
      </Routes>
    </div>
  )
}

export default App

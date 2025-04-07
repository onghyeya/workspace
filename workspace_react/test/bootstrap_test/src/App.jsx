import './App.css'
import FillExample from './FillExample'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 import
import './styles/coustom.scss';  // SCSS 파일을 import

function App() {

  return (
    <>
     <div className='container'>
      <FillExample/>
    </div>
    </>
  )
}

export default App

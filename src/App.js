import logo from './logo.svg';
import './App.css';
import UseStateHook from './Hooks/UseStateHook';
import UseEffect from './Hooks/UseEffect';
import UseMemo from './Hooks/UseMemo';
import UseRef from './Hooks/UseRef';
import BookData from './PropsPractice/BookData';
import Main from './Hooks/UseMemo/Main';
import UseReducer from './Hooks/UseReducer/UseReducer';
import UseRefEx2 from './Hooks/UseRefEx2';
import UseEffect2 from './Hooks/UseEffect2'
import RouterEx from './Routing/RouterEx'
import RouterPath from './Routing/RouterPath';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <h5>HOLA</h5> */}
      {/* <UseStateHook/>  */}
      {/* <UseEffect/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <BookData/> */}
      {/* <Main/> */}
      {/* <UseReducer/> */}
      {/* <UseRefEx2/> */}
      {/* <UseEffect2/> */}
      {/* <RouterPath/> */}
       <BrowserRouter>
                <Route path='/' element={<Login/>}></Route>
            <Routes>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/Dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

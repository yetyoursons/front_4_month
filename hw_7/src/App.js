import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import CountPage from './pages/countPage/CountPage';
// import UsersPage from './pages/usersPage/UsersPage';
import Menu from './components/menu/Menu';
import Component1 from './components/componentHw/Component1';
import Component2 from './components/componentHw/Component2';
import Component3 from './components/componentHw/Component3';
import Component4 from './components/componentHw/Component4';



function App() {
  
  

  
  
  return (
    <BrowserRouter>
      <div className="container">
        <Menu/>
        <Routes>
          {/* <Route path = "/" element = {<CountPage/>}/>
          <Route path = "/users" element = {<UsersPage/>}/> */}
          <Route path = "/component1" element = {<Component1/>}/>
          <Route path = "/component2" element = {<Component2/>}/>
          <Route path = "/component3" element = {<Component3/>}/>
          <Route path = "/component4" element = {<Component4/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

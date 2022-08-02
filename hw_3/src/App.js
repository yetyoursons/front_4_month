import './App.css';
import MassiveCompHw from './components/massiveCompHw/MassiveCompHw';
// import PortfolioPage from './components/portfolioPage/PortfolioPage';
import MainPage from './pages/mainPage/MainPage';
import ContactsPage from './pages/mainPage/usersPage/ContactsPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className="container">
      {/* <MainPage/>  */}
      {/* -------------------------- */}
      {/* <PortfolioPage/> */}
      {/* <UsersPage title = "Dastan"/> */}
      {/* ---------------- */}
      
      {/* <ContactsPage number = {1}/> */}
      <MassiveCompHw/>
    </div>

  );
}
export default App;

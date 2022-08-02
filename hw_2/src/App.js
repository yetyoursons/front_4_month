import './App.css';
import AboutPage from './pages/AboutPage/AboutPage';



function AboutUs (props) {
  console.log(props);
  return (
    <h1>{props.Title}</h1>
  )
}

function App() {
  return (
    <div className="container">
      <AboutPage/>
    </div>
  );
}
export default App;

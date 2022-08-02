import logo from './logo.svg';
import './App.css';

function Header () {
  return(
    <div >
      <ul>
        <li> main page</li>
        <li> about page</li>
        <li> contact page</li>
      </ul>
    </div>
  );
}

function Content () {
  return(
    <>
        <h1>Hello World</h1>
        <p>lorem</p>
        <button>button</button>
    </>
  )
}

function User (props) {
  console.log(props);
  return (
      <div>{props.name} {props.lastName}</div>
  )
}

function AboutUs (props) {
  console.log(props);
  return (
    <h1>{props.Title}</h1>
  )
}

function App() {
  return (
    <div className="container">
      <User name = "Aman" lastName = "Kurmangaliev"/>
      -----------
      <Header/>
      <Content/>
      <AboutUs Title = "Title"/>
    </div>
  );
}
export default App;

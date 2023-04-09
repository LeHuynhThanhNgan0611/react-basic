import logo from './logo.svg';
import './App.scss';
import MyComponent from '../example/MyComponent';
/** 2 component: class component / function component (function, arrow)
 * 
 * JSX: function or hàm của js
 * @returns 
 */
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Le Huynh Thanh Ngan)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;

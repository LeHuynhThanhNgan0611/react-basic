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
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;

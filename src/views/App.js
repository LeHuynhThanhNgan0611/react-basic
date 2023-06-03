import logo from './logo.svg';
import './App.scss';
import MyComponent from '../example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          Simple TODO Apps with React.js (Le Huynh Thanh Ngan &amp; Hoi Dan IT)
        </p>
        {/* <MyComponent></MyComponent> */}
        <ListTodo></ListTodo>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;

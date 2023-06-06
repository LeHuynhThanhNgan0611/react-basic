import logo from './logo.svg';
import './App.scss';
import MyComponent from '../example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from '../example/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/** 2 component: class component / function component (function, arrow)
 * 
 * JSX: function or hàm của js
 * @returns 
 */
function App() {
  // const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <ListTodo/>
          </Route>
          <Route path="/about">
            <MyComponent/>
          </Route>
        </Switch>
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
    </BrowserRouter>
  );
}

export default App;

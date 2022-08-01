import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
  
  <Router>
      <div className="App">
        <Routes>
          
          <Route path = "/login" element = {
              <>
                <Login/>
              </>
            }/>

          <Route path = "/checkout" element = {
            <>        
              <Header/>
              <Checkout/>
            </>
          }/>

          <Route path = "/" element = {
            <>
              <Header/>
              <Home/>
            </>
          }/>

        </Routes>

      </div>

  </Router>
);
}

export default App;

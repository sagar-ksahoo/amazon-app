import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './components/Payment';


function App() {

  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app loads since [] is kept empty !!
    
    auth.onAuthStateChanged(authUser => {
      console.log("The user is: ", authUser);

      if(authUser){
        // the user just logged in
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else
      {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })

  }, [])
  

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

          <Route path = "/payment" element = {
            <>
              <Header/>
              <Payment/>
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

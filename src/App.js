import React,{useEffect} from 'react';
import './App.css'
import Header from './Header'
import Home from './Home'
import CheckOut from './CheckOut';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStateValue} from "./StateProvider"
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KiPqSSBOoPsYt4wfRLGJUvEFZIDjdRISLMvLm0oYBsOO3rJjjoYKjUN80a43XSkeUEhWQyOkBsor8dnh5AvzEe600IexBNILj");


function App() {
  //Creating a Listener who keeps track of who's signed in.
  const [dispatch] = useStateValue();
  useEffect(() =>{
    
     //Once the app loads we attach this Listener.If we log in,it modifies the code.If we register this modifies ..
    auth.onAuthStateChanged( authUser => {
      console.log('The user is >>>',authUser)

      if(authUser) {
        //The user just logged in/ The user was logged in from before
        //Storing User inside React context Api(Redux)
        dispatch({
          type: 'SET_USER',
          user: authUser, //Fire off the event and shoot it into Data Layer 
        });
      }
      else {
        //the user is logged out.
        dispatch({
        type: 'SET_USER',
        user: null,
        });
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/login">
        <Login />
        </Route>
        <Route path="/chkOUT">
         <Header />
          <CheckOut />
        </Route>
        <Route path="/payment">
         <Header />
         <Payment />
        </Route>
        <Route path="/">
           <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

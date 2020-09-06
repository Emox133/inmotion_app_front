import React, {useEffect, useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import AdminPanel from './pages/adminPanel'
import jwtDecode from 'jwt-decode'
import {myContext} from './context/context'
import axios from 'axios'

function App() {
  let context = useContext(myContext)
  let {logout, getLogedInUser, setAuthenticated, getAllPosts, getNotifications} = context
  
  const token = localStorage.getItem('Bearer')
  
  useEffect(() => {
    if(token) {
      const decoded = jwtDecode(token)
      if(new Date(decoded.exp * 1000) < new Date()) {
        // expired
        logout()
      } else {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        setAuthenticated()
        getLogedInUser()
        getAllPosts()
        getNotifications()
      }
    }
  }, [token, getLogedInUser, logout, setAuthenticated, getAllPosts, getNotifications])
  
  
  let app = (
    <Router basename="/">  
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          
          <Route path="/posts">
            <Home />
          </Route>
  
          <Route path="/login"> 
            <Login />
          </Route>

          <Route path="/me">
            <Profile/>
          </Route>

          <Route path="/admin">
            <AdminPanel/>
          </Route>
        </Switch>
      </Router>
  )

  return (
    <div className="App">
      {app}
    </div>
  );
}

export default App;

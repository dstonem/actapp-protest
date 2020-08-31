import React, { useEffect,useState } from 'react';
// import {eventData} from './eventData';
import useFetch from './hooks/useFetch'
import Header from './components/Header'
import EventCreator from './components/EventCreator'
import EventFeedContainer from './components/EventFeedContainer'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import './App.css';
import UserProfile from './components/UserProfile';
import Survey from './components/Survey'
import EventDetails from './components/EventDetails'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [loading,error,data,fetchData,setUrl] = useFetch('/user')
  
  const [user,setUser] = useState(null)
  const [userInfo,setUserInfo] = useState(null)

  useEffect(()=>{
    if(!data && user){
      fetchData()
    }
    setUserInfo(data)
  },[user])

  console.log(userInfo)
   
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="main">
    
          <Route exact path='/LoginForm'>
            <LoginForm onLogIn={() => setUser(true)} user={user}/>
          </Route>
          
          <Route exact path='/EventCreator' component={EventCreator}></Route>
          
          <Route exact path='/EventFeedContainer'>
            <EventFeedContainer user={user} setUser={setUser}/>
          </Route>
          <Route path='/Survey'>
            <Survey onSubmit={() => setUserInfo(userInfo)} />
          </Route>
          
          <Route exact path='/RegisterForm' user={user} setUser={setUser} component={RegisterForm}></Route>
          <ProtectedRoute exact path='/UserProfile' loggedIn={user} user={user} component={UserProfile}></ProtectedRoute>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

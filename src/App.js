import React, { useEffect,useState } from 'react';
// import {eventData} from './eventData';
import useFetch from './hooks/useFetch'
import Header from './components/Header'
import EventCreator from './components/EventCreator'
import EventFeed from './components/EventFeed'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import './App.css';
import UserProfile from './components/UserProfile';
import Survey from './components/Survey'
import EventDetails from './components/EventDetails'
import {
  Route,
  NavLink,
  Switch,
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

  console.log(userInfo,user,data)
   
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
          <Route exact path='/LoginForm'>
            <LoginForm onLogIn={() => setUser(true)} user={user}/>
          </Route>
          
          <Route exact path='/EventCreator' component={EventCreator}></Route>
          
          <Route exact path='/EventFeed'>
            <EventFeed user={user} userInfo={data} setUser={setUser}/>
          </Route>

          <Route exact path="/events/:event_id">
            <EventDetails user={user} setUser={setUser} userInfo={data}/>
          </Route>

          <Route exact path='/Survey'>
            <Survey onSubmit={() => setUserInfo(data)} />
          </Route>
          
          <Route exact path='/RegisterForm' user={user} setUser={setUser} component={RegisterForm}></Route>

          <ProtectedRoute exact path='/UserProfile' loggedIn={user} user={user} component={UserProfile}></ProtectedRoute>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

//event={event} id={id} pic={data[event_id].pic} title={data[event_id].title} address={data[event_id].address} description={data[event_id].description} date={data[event_id].date} action1={data[event_id].action1} action2={data[event_id].action2} action3={data[event_id].action3}
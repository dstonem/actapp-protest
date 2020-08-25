import React, { useEffect } from 'react';
// import {eventData} from './eventData';
import useFetch from './hooks/useFetch'
import Header from './components/Header'
import EventFeed from './components/EventFeed'
import Event from './components/Event'
import EventCreator from './components/EventCreator'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import './App.css';

const App = () => {
  const [loading,error,data,fetchData,setUrl] = useFetch('http://localhost:3333/events')
  
  useEffect(()=>{
    if(!data){
      fetchData()
    }
  },[])
  
  if(!data) return <div>loading...</div>
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        <EventFeed>
          {data.map((event,idx) => <Event key={idx} img={event.pic} title={event.title} description={event.description} starttime={event.starttime} endtime={event.endtime} date={event.eventDate} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng} />)}
        </EventFeed>
        <EventCreator />
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;

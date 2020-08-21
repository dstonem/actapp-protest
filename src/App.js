import React, { useEffect } from 'react';
import {eventData} from './eventData';
import Header from './components/Header'
import EventFeed from './components/EventFeed'
import Event from './components/Event'
import EventCreator from './components/EventCreator'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import './App.css';
import { apiKey } from './config';

function App() {
  console.log(eventData[0].location)
  return (
    <div className="App">
      <Header />
      <div className="main">
        <EventFeed>
          {eventData.map((event,idx) => <Event key={idx} img={event.img} title={event.title} description={event.description} imgSrc={event.imgSrc} starttime={event.starttime} endtime={event.endtime} date={event.date} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng}/>)}
        </EventFeed>
        <EventCreator />
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;

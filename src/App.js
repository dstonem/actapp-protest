import React from 'react';
import {eventData} from './eventData';
import EventFeed from './components/EventFeed'
import Event from './components/Event'
import EventCreator from './components/EventCreator'
import './App.css';

function App() {
  console.log(eventData[0].location)
  return (
    <div className="App">
      <EventFeed>
        {eventData.map((event,idx) => <Event key={idx} img={event.img} title={event.title} description={event.description} starttime={event.starttime} endtime={event.endtime} date={event.date} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng}/>)}
      </EventFeed>
      <EventCreator />
    </div>
  );
}

export default App;

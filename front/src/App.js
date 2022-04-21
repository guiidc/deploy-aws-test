import { useState } from 'react';
import axiosIntance from './utils/axiosInstance';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFetchEvents = async () => {
    setLoading(true);
    try {
      const { data } = await axiosIntance.get('/events');
      setEvents(data);

    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="App">
     <h1>App Lista de eventos</h1>
     <button className="button" onClick={onFetchEvents}>Obter lista de eventos</button>
     { loading && <p>Carregando...</p>}
     <ul className="events-list">
       {events.map(({id, event}) => (
         <li key={id}>{event}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;

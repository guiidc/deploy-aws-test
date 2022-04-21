import { useState } from 'react';
import axiosIntance from './utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function List() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onChangeRoute = () => {
      navigate('/outro')
    }
  
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
      <div className="List">
       <h1>App Lista de eventos</h1>
       <button className="button" onClick={onFetchEvents}>Obter lista de eventos</button>
       { loading && <p>Carregando...</p>}
       <ul className="events-list">
         {events.map(({id, event}) => (
           <li key={id}>{event}</li>
         ))}
       </ul>
       <button className='button' onClick={onChangeRoute}>Outra página</button>
      </div>
    );
  }
  
  export default List;
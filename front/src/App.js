import './App.css';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Outro from './Outro';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={ <List />} />
          <Route path="/outro" element={ <Outro />} />
      </Routes>
    </div>
  );
}

export default App;

import './style/App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('/api')
    .then((response) => response.json())
    .then(response => setDate(response.message))
  }, []);
  return (
    <div className="App">
     <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;

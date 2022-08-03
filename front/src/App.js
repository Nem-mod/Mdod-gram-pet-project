import './style/App.scss';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Feed from './components/Feed';
import { Container } from '@mui/system';
// import { useState } from 'react';
// import { useEffect } from 'react';

function App() {
  // const [date, setDate] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //   .then((response) => response.json())
  //   .then(response => setDate(response.message))
  // }, []);
  return (
    <div className="App">
      <Header></Header> 
      <Container maxWidth="lg">
        <div className="row">
          <Sidebar class='sidebar'/>
          <Feed/>
        </div>  
      </Container>

    </div>
  );
}

export default App;

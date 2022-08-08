import './style/App.scss';
import React from 'react'
import Sidebar from './components/Sidebar';
import Header from './components/Header/Header';
import Feed from './Pages/Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, fetchAuthMe } from './redux/slices/auth'


function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])
  return (
    <div className="App">
      <Header/>
      <Container maxWidth="lg">
        
        <div className="row">
          <Sidebar class='sidebar'/>
          <Routes>
              <Route path="/home/*" element={<Feed/>}/>
          </Routes>
          
        </div>  
      </Container>

    </div>
  );
}

export default App;

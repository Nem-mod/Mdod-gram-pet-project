import './styles/App.scss';
import React from 'react'
import Sidebar from './components/SideBar/index';
import Header from './components/Header/index';
import Feed from './Pages/Feed/index';
import Settings from './Pages/Settings/index';
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
          <Sidebar/>
          <div className="content">
          <Routes>
              <Route path="/home/*" element={<Feed/>}/>
              {isAuth && 
                <Route path="/settings/*" element={<Settings/>}/>
              }
              
          </Routes>
          
          </div>
          
        </div>  
      </Container>

    </div>
  );
}

export default App;

import Logo from "../UI/Logo"
import { AppBar, Button, Toolbar} from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import SignupModal from "../modal/SignupModal"
import LoginModal from "../modal/LoginModal"
import {useSelector, useDispatch} from 'react-redux'
import {logout, selectIsAuth, selectUserData } from '../../redux/slices/auth';
import { Link } from "react-router-dom"

export default function Header() {
  const dispatch = useDispatch();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  
  const onClickLogout = () => {
    if(window.confirm('Are you sure you want to logout')){
      dispatch(logout());
      window.localStorage.removeItem('token')
    }
    setOpenLogin(false);
  };
  return (
  <div className="header">
    <AppBar position="static" sx={{
        background: '#50b7f5',
        mb: "1.5rem"
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{gap: "10px"}}>
          <Logo/>
          {!isAuth &&
            <>
              <LoginModal 
                open={openLogin}
                handleClickOpen={()=> {setOpenLogin(true);}}
                handleClose={() => setOpenLogin(false)} 
              />
              <SignupModal 
                open={openSignup} 
                handleClickOpen={()=> setOpenSignup(true)} 
                handleClose={() => setOpenSignup(false)} 
              />
            </>
          }
          {isAuth && 
            <>
              <Link to={`/user/${userData?.userName}`}>{userData?.userName}</Link>
              <Button className="button" onClick={onClickLogout}>Log out</Button>
            </> 
          }
        </Toolbar>
      </Container>
    </AppBar>
    
  </div>
  )
}

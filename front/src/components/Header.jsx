import Logo from "./UI/Logo"
import { AppBar, Toolbar} from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import SignupModal from "./SignupModal"
import LoginModal from "./LoginModal"
export default function Header() {

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  

  return (
  <div className="header">
    <AppBar position="static" sx={{
        background: '#50b7f5',
        mb: "1.5rem"
    }}>
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <Logo/>
        <LoginModal 
          open={openLogin}
          handleClickOpen={()=> {setOpenLogin(true); console.log('1')}}
          handleClose={() => setOpenLogin(false)} 
        />
        <SignupModal 
          open={openSignup} 
          handleClickOpen={()=> setOpenSignup(true)} 
          handleClose={() => setOpenSignup(false)} 
        />

        
        
      </Toolbar>
    </Container>
    </AppBar>
    
  </div>
  )
}

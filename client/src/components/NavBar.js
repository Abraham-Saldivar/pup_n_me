import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ContactsIcon from "@mui/icons-material/Contacts";
import DashboardIcon from "@mui/icons-material/Dashboard";
function NavBar({ onLogout, setCurrentUser, currentUser, setTodo }) {
  const history = useHistory();
  function goHome() {
    history.push("/");
  }

  function logInClick() {
    history.push("/login");
  }
  function signUpClick() {
    history.push("/signup");
  }
  function logOutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setCurrentUser(false));
    history.push("/");
  }
  function dashboardClick() {
    history.push("/dashboard");
    // window.location.reload();
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }
  if (!currentUser) {
    history.push("/login");
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <>
              <HomeIcon onClick={goHome} sx={{ cursor: "pointer" }} />
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Pup'n Me
              </Typography>
            </>

            {!currentUser ? (
              <>
                <Button onClick={logInClick} color="inherit">
                  Login
                </Button>

                <LoginIcon />
              </>
            ) : null}

            {!currentUser ? (
              <>
                <Button onClick={signUpClick} color="inherit">
                  SignUp
                </Button>
              </>
            ) : null}

            {currentUser ? (
              <>
                <Button onClick={dashboardClick} color="inherit">
                  Dashboard
                  <DashboardIcon />
                </Button>

                <Button onClick={logOutClick} color="inherit">
                  Logout
                </Button>
                <ContactsIcon />
              </>
            ) : null}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default NavBar;

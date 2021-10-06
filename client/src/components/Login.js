import { useHistory, Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

function Login({ currentUser, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function homeClick() {
    history.push("/");
  }
  function reRoute() {
    history.push("/signup");
  }
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    console.log(user);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
          history.push("/dashboard");
        } else {
          throw new Error(
            "User is either not registered or using invalid credentials"
          );
        }
      })
      .catch((error) => {
        window.alert("OOPS. INVALID USERNAME OR PASSWORD");
        console.log(error);
      });
  }

  if (currentUser) {
    history.push("/dashboard");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2> Let's get you signed in.</h2>

        <div>
          <TextField
            placeholder="Username"
            label="Username"
            variant="filled"
            className="login-form-input"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <TextField
            placeholder="Password"
            label="Password"
            variant="filled"
            className="login-form-input"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Box>
            <Button type="submit" value="Login">
              Login
            </Button>{" "}
            <Button
              type="submit"
              value="Don't have a account? Sign up here."
              onClick={reRoute}
            >
              Don't have an account? Sign up here.
            </Button>{" "}
          </Box>
        </div>
      </form>
    </div>
  );
}

export default Login;
// {
//   if (currentUser) {
//     return history.push("/dashboard");
//   } else {
//     return console.log("not ready");
//   }
// }

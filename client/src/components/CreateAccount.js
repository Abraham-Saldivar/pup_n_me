import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState } from "react";

import TextField from "@mui/material/TextField";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function homeClick() {
    history.push("/");
  }

  return (
    <div>
      <Box
        sx={{
          p: 2,
          position: "absolute",
          top: 1,
          left: "100%",
          zIndex: "tooltip",
        }}
      >
        <Stack spacing={2} direction="row">
          <Button onClick={homeClick} variant="text">
            Home
          </Button>
        </Stack>
      </Box>
      <form>
        <h2> Let's get you signed in.</h2>

        <div>
          <label>Username</label>
          <input
            placeholder="Username"
            className="login-form-input"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            placeholder="Password"
            className="login-form-input"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
          <button>Don't have a account? Sign up here.</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;

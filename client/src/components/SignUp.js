import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function CreateAccount({ userData, loggingIn, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [photo_url, setPhotoUrl] = useState("");
  // const [favorite_breed, setFavoriteBreed] = useState("");
  // const [birthday, setBirthday] = useState("");
  let history = useHistory();

  function homeClick() {
    history.push("/");
  }
  function signReroute() {
    history.push("/login");
  }
  function handleNewAccount(e) {
    e.preventDefault();
    //Missing name
    const newUserCredentials = {
      username: username,
      password: password,
      //   photo_url: photo_url,
      //   favorite_breed: favorite_breed,
      //   birthday: birthday,
    };

    fetch("/pet_users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserCredentials),
    })
      .then((res) => res.json())
      .then(loggingIn);
    history.push("/dashboard");
    console.log(newUserCredentials);
  }
  if (currentUser) {
    history.push("/dashboard");
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
      <form onSubmit={handleNewAccount}>
        <h2> Let's get you signed up.</h2>
        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}

        <div>
          <TextField
            placeholder="Username"
            label="Username"
            variant="filled"
            className="login-form-input"
            value={username}
            type="text"
            placeholder="Username"
            className="login-form-input"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />{" "}
          <TextField
            placeholder="Username"
            label="Password"
            variant="filled"
            className="login-form-input"
            value={password}
            type="text"
            placeholder="Password"
            className="login-form-input"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <input
            placeholder="Photo"
            className="login-form-input"
            value={photo_url}
            type="text"
            onChange={(e) => setPhotoUrl(e.target.value)}
            required
          />
          <input
            placeholder="Favorite Breed"
            className="login-form-input"
            value={favorite_breed}
            type="text"
            onChange={(e) => setFavoriteBreed(e.target.value)}
            required
          />
          <input
            placeholder="Birthday"
            className="login-form-input"
            value={birthday}
            type="text"
            onChange={(e) => setBirthday(e.target.value)}
            required
          /> */}
          <Button type="submit" value="Create Account">
            {" "}
            Create Account
          </Button>
          <Button onClick={signReroute}> Sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;

import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import TodoForm from "./TodoForm";
import PoopTrackerForm from "./PoopTrackerForm";
function Home({ data, setDogData, id, todoData, currentUser }) {
  const newDog = () => {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => setDogData(data));
  };
  function refreshDog() {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => setDogData(data));
  }

  return (
    <div>
      {currentUser ? <TodoForm id={id} todoData={todoData} /> : null}
      {currentUser ? <PoopTrackerForm id={id} todoData={todoData} /> : null}

      <Box
        sx={{
          p: 2,
          position: "absolute",
          top: 1,
          left: "100%",
          zIndex: "tooltip",
        }}
      ></Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={data.url}
          alt="Where did the puppy go? "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doggo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here's a random dog. Want to see more? Sign up by clicking on the
            "New Dog" button! 🐕
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={newDog} size="small">
            Sign me up! 🐕
          </Button>
          {currentUser ? (
            <Button onClick={refreshDog} size="small">
              New pup!
            </Button>
          ) : null}

          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

//  <Stack spacing={2} direction="row">
//         <Button onClick={logInCLick} variant="text">
//           Login
//         </Button>
//         <Button onClick={signUpClick} variant="text">
//           SignUp
//         </Button>
//       </Stack>
//       <Card sx={{ minWidth: 275 }}>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             Word of the Day
//           </Typography>
//           <Typography variant="h5" component="div">
//             be{bull}nev{bull}o{bull}lent
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             adjective
//           </Typography>
//           <Typography variant="body2">
//             well meaning and kindly.
//             <br />
//             {'"a benevolent smile"'}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>

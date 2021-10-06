import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

function TodoForm({ id, todoData }) {
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todo, setTodo] = useState([]);

  function newTodo(e) {
    {
      e.preventDefault();
      const newTodo = {
        content: content,
        is_completed: completed,
        pet_user_id: id,
      };
      console.log(newTodo);
      fetch(`/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => setTodo([...todo, data]));
          } else {
            throw new Error("New todo was not processed.");
          }
        })
        .catch((error) => {
          window.alert("Oops something went wrong. Please try again");
          console.log(error);
        });
    }
  }
  return (
    <div>
      <>
        <form onSubmit={newTodo}>
          <h2> New todo</h2>
          {/* :content, :is_completed, */}
          <div>
            <InputLabel>Add your new todo here!</InputLabel>
            <TextField
              placeholder="Text Content"
              label="Text Content"
              variant="filled"
              className="login-form-input"
              value={content}
              type="text"
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <InputLabel id="demo-simple-select-label">Completed?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={completed}
              label="Completed"
              onChange={(e) => setCompleted(e.target.value)}
              required
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
            <Button type="submit" value="Login">
              Create new Todo!
            </Button>{" "}
          </div>
        </form>
      </>
    </div>
  );
}

export default TodoForm;

// return (
//   <Alert severity="success">
//     <AlertTitle>Success</AlertTitle>
//     This is a success alert — <strong>check it out!</strong>
//   </Alert>
// );

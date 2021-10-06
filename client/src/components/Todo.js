import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import DoneIcon from "@mui/icons-material/Done";
import FadeIn from "react-fade-in";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Todo({ id, todoId, deleteTodo, setTodo, todos, todo }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function updateTodo(e) {
    e.preventDefault();
    const updatedTodo = {
      content: content,
      pet_user_id: id,
    };
    fetch(`/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((data) =>
            setTodo(todos.map((t) => (t.id == data.id ? data : t)))
          )
          .then(history.push("/dashboard"));
      } else {
        throw new Error("New updated todo was not processed.");
      }
    });
    setOpen(false);

    console.log(updatedTodo);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
        <List>
          <FadeIn>
            <ListItem
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <DoneIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    variant="outlined"
                    onClick={handleClickOpen}
                  >
                    <ModeEditOutlineIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PetsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={todo.content} />
            </ListItem>
          </FadeIn>
        </List>
      </Box>
      <div>
        <form onSubmit={updateTodo}>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>EDITING MODE:</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Hello! If you would like to edit this particular todo, simply
                add the new content below and submit! Woof! Woof! 🐕
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Text Content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={updateTodo} type="submit" value="Submit">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </div>
  );
}
export default Todo;

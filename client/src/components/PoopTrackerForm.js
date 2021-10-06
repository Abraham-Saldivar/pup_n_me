import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
// import TimePicker from "@mui/lab/TimePicker";
// import { DateAdapter } from "@mui/lab/AdapterDateFns";
// import { AdapterDateFns } from "@mui/lab/AdapterDateFns";

// import Stack from "@mui/material/Stack";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";

function PoopTrackerForm({ id, todoData }) {
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
          <h2> Poop Tracker </h2>
          {/* :content, :is_completed, */}
          <div>
            <InputLabel>
              Trying to track your dogs 💩 time? Fill this form!
            </InputLabel>
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
            {/* <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            /> */}
            <Button type="submit" value="Login">
              Create new Todo!
            </Button>{" "}
          </div>
        </form>
      </>
    </div>
  );
}
export default PoopTrackerForm;

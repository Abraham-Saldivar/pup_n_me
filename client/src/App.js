// Things that aide in React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Components
import "./App.css";
import Login from "./components/Login.js";
import NavBar from "./components/NavBar.js";
import Dashboard from "./components/Dashboard";
import PupProfile from "./components/PupProfile";
import SignUp from "./components/SignUp";
import TodoList from "./components/TodoList";
import Home from "./components/Home";

function App() {
  const history = useHistory();
  const [userData, setAllUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [todos, setTodo] = useState([]);
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    fetch(`/pet_users`)
      .then((res) => res.json())
      .then((data) => setAllUserData(data));
  }, []);
  // This is to get all the todos
  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  console.log(todos);

  // Logging out components
  function onLogin(user) {
    setCurrentUser(user);
  }
  function onLogOut() {
    setCurrentUser(false);
  }
  // API to get the dog images
  useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => setDogData(data));
  }, []);

  // This is to make sure that user is logged and stays logged in.
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);
  function deleteTodo(id) {
    fetch(`/todos/${id}`, {
      method: "DELETE",
    });
    setTodo(todos.filter((todo) => todo.id !== id));
  }
  let id = currentUser.id;
  let todoId = todos.id;

  return (
    <>
      {/* <Stack spacing={2} direction="row">
        <Button onClick={onLogOut} variant="text">
          Signout
        </Button>
      </Stack> */}
      <div>
        <Router>
          <NavBar
            setCurrentUser={setCurrentUser}
            onLogOut={onLogOut}
            history={history}
            currentUser={currentUser}
            setTodo={setTodo}
          />
          <Switch>
            <Route
              path="/login"
              component={() => (
                <Login
                  onLogin={onLogin}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              )}
            />
            <Route
              path="/signup"
              component={() => (
                <SignUp
                  userData={userData}
                  onLogin={onLogin}
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              )}
            />
            <Route
              path="/dashboard"
              component={() => (
                <Dashboard
                  id={currentUser.id}
                  todoId={todoId}
                  todos={todos}
                  deleteTodo={deleteTodo}
                  setTodo={setTodo}
                  todos={todos}
                />
              )}
            />
            <Route path="/pupprofile" component={() => <PupProfile />} />
          </Switch>
          <Route exact path="/">
            <Home
              setDogData={setDogData}
              data={dogData}
              id={currentUser.id}
              todos={todos}
              currentUser={currentUser}
            />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;

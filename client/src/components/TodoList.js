import Todo from "./Todo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";

import * as React from "react";

function TodoList({ id, todoId, setTodo, deleteTodo, todos }) {
  return (
    <>
      <Paper sx={{ width: 400, height: 330, overflow: "auto" }}>
        <List dense component="div" role="list">
          {!!todos &&
            todos.map((todo) => (
              <Todo
                id={id}
                key={todo.content}
                todoId={todo.id}
                setTodo={setTodo}
                deleteTodo={deleteTodo}
                todos={todos}
                todo={todo}
              />
            ))}

          <ListItem />
        </List>
      </Paper>
    </>
  );
}
export default TodoList;

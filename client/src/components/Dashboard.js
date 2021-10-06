import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Dashboard({ id, todoData, todoId, setTodo, deleteTodo, todos }) {
  return (
    <div>
      <TodoList
        id={id}
        todoData={todoData}
        todoId={todoId}
        setTodo={setTodo}
        deleteTodo={deleteTodo}
        setTodo={setTodo}
        todos={todos}
      />
    </div>
  );
}
export default Dashboard;

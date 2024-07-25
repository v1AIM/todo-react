import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className="py-10  h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          key={todos.length}
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
          // onDelete={(id) =>
          //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
          // }
        />
      </div>
      <TodoSummary
        key={todos.length}
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  );
}

export default App;

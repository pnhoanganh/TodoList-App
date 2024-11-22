import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCart from "./components/TodoCart";
function App() {
  return (
    <>
      <main>
        <TodoInput />
        <TodoList />
        <TodoCart />
      </main>
    </>
  );
}

export default App;

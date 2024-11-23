import TodoCart from "./TodoCart";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <>
      <ul className="main">
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCart {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </TodoCart>
          );
        })}
      </ul>
    </>
  );
}

import { useEffect } from "react";

const Todos = ({ todos, addTodo }) => {
  useEffect(() => {
    console.log("I run on every render! :C");
  }, [addTodo]);

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default Todos;
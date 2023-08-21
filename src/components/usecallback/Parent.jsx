import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
    console.log("parent")
  const [todos, setTodo] = useState(["todos no one"]);
  const [count, setCount] = useState(0);
  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "another todo"]);
  }, [todos]);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Click {count} times
      </button>
      <hr style={{ border: "1px solid", padding: "10px" }} />
      <Child todos={todos} addTodo={addTodo} />
    </>
  );
};

export default Parent

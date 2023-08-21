import { CatchContext } from "../utils/context";
import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, setCount }) => {
  const {state, dispatch} = CatchContext();
  console.log(state);
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
        dispatch({type: "SHOW_ONLY_FIRST"})
      }}>clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);

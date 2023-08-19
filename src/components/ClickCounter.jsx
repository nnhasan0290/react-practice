import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);

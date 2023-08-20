import withFive from "./HOC/withFive";

const General = () => {
  return <h2>This is from general two component</h2>;
};

export default withFive(General);

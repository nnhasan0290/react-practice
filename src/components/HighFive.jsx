import withFive from "./HOC/withFive";

const HighFive = () => {
  return <h2>This is from general component</h2>;
};

export default withFive(HighFive);

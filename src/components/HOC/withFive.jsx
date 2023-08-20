const withFive = (Component) => {
  return function NewComponent() {
    return (
      <>
        <Component />
        <h2>This is from higher order component</h2>
      </>
    );
  };
};

export default withFive;

import ClickCounter from "./components/ClickCounter";
import General from "./components/General";
import HighFive from "./components/HighFive";
import Parent from "./components/usecallback/Parent";
import ContextProvider from "./utils/context";

const App = () => {
  return (
    <ContextProvider>
      <h2>This is the application</h2>
      <ClickCounter />
      <HighFive />
      <General />
      <Parent/>
    </ContextProvider>
  );
};
export default App;

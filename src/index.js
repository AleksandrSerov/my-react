import { Didact } from "./engine";

/** @jsx Didact.createElement */
const Counter = () => {
  const [state, setState] = Didact.useState(1);

  const handleClick = () => {
    setState((c) => c + 1);
  };

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};

/** @jsx Didact.createElement */
const App = () => {
  return <Counter />;
};

Didact.render(<App />, document.getElementById("root"));

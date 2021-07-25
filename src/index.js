import { Didact } from "./engine";

/** @jsx Didact.createElement */
const Counter = () => {
  const [state, setState] = Didact.useState(1);
  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => setState((c) => c + 1)}>increment</button>
      <button onClick={() => setState(state + 1)}>increment1</button>
    </div>
  );
};

/** @jsx Didact.createElement */
const App = () => {
  return <Counter />;
};

Didact.render(<App />, document.getElementById("root"));

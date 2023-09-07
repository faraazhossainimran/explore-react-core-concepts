import { useState } from "react";
import Team from "./Team";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleReduce = () => {
    const newReduce = count - 1;
    setCount(newReduce)
  }
  return (
    <>
    <div>
      <Team></Team>
      <h2>Counter {count}</h2>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleReduce}>Decrease</button>
    </div>
    </>
  )
}

export default App;

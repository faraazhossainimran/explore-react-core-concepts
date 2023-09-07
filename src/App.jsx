import "./App.css";
function App() {
  function handleClick () {
    alert('clicked')
  }
  function handleClick2 (num) {
    alert(num + 5)
  }
  return (
    <>
    <div>
      <h2>React core cncept</h2>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={() => {handleClick2(20)}}>click 2</button>
    </div>
    </>
  )
}

export default App;

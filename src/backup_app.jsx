// import { useState } from "react";
// import "./App.css";
// import Todo from "./Todo";
// import Actor from "./Actor";
// function App() {
//   return (
//     <>
//       <h1>Hi, from react app.jsx</h1>
//       <Actor name="baba raj"></Actor>
//       <Todo task="Learn react" isDone={false}></Todo>
//       <Todo task="core concepts" isDone={true}></Todo>
//       <Todo task="Try jsx" isDone={false}></Todo>
//       <DeviceWithprops name='mobile' price='4600'></DeviceWithprops>
//       <Device name='laptop' price='45600'></Device>
//       <Device></Device>
//       <Device></Device>
//       <Person></Person>
//       <Developer></Developer>
//     </>
//   );
// }

// function DeviceWithprops (props) {
//   return (
//     <div>
//       <h2>This is Device: {props.name} </h2>
//       <h3>Price is: {props.price}</h3>
//     </div>
//   )
// }
// function Device ({name='no name', price=0}) {
//   return (
//     <div>
//       <h2>This is Device: {name} </h2>
//       <h3>Price is: {price}</h3>
//     </div>
//   )
// }
// function Person () {
//   const age = 25;
//   const ageMore = 40;
//   const person = {name: 'imran', age: 24}
//   return (
//    <div className='design'>
//      <h1>I'm a person with age: {ageMore + 25}</h1>
//     <p>Details of {person.name}: name: {person.name}, age: {person.age}</p>
//    </div>
//   )
// }

// function Developer (){
//   const developerStyle = {
//     margin: '20px',
//     padding: '20px',
//     border: '2px solid black',
//     borderRadius: '10px'
//   }
//   return (
//     <div style={developerStyle}>
//       <h5>Devoloper</h5>
//       <p>coding</p>
//     </div>
//   )
// }
// export default App;

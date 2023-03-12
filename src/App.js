//2nd way to do this it's more efficent//
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux";
function App(props) {
  const count = useSelector((state) => state);
  //If state is more then 1 then will use this syntax
  // const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  return (
    <div>
      <h3>{count}</h3>
      <h1>Count Goes Here</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings
export default App;

/* 1st Way*/
// import "./App.css";
// import { connect } from "react-redux";
// import { increment, decrement } from "./redux";
// function App(props) {
//   return (
//     <div>
//       <h3>{props.count}</h3>
//       <h1>Count Goes Here</h1>
//       <button onClick={props.decrement}>-</button>
//       <button onClick={props.increment}>+</button>
//     </div>
//   );
// }
// // function mapStateToProps(globalState) {
// //   // return an object where the keys are the name of the prop your component wants,
// //   // values are the actual parts of the global state your component wants
// //   return {
// //     count: globalState,
// //   };
// // }

// function mapStateToProps(state) {
//   return {
//     count: state,
//   };
// }
// const mapDispatchToProps = {
//   increment: increment,
//   decrement: decrement,
// };
// export default connect(
//   mapStateToProps /*what state do you want*/,
//   /*What action you want to dispatch*/ mapDispatchToProps
// )(App);

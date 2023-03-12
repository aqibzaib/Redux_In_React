/* 1st Way*/
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement } from "./redux";
function App(props) {
  return (
    <div>
      <h3>{props.count}</h3>
      <h1>Count Goes Here</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  );
}
function mapStateToProps(globalState) {
  // return an object where the keys are the name of the prop your component wants,
  // values are the actual parts of the global state your component wants
  return {
    count: globalState,
  };
}

function mapStateToProps(state) {
  return {
    count: state,
  };
}
const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
};
export default connect(
  mapStateToProps /*what state do you want*/,
  /*What action you want to dispatch*/ mapDispatchToProps
)(App);

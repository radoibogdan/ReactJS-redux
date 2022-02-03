import { Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import classes from './Counter.module.css';

// const Counter = () => {
//   // return a dispatch function that we can execute
//   const dispatch = useDispatch();

//   // useSelector => extract the part of the state that we need in this component (counter in our case)
//   // Automatically sets up subscription to the redux store for this component. If store value changes => component is re-executed
//   const counter = useSelector(state => state.counter)

//   const incrementHandler = () => {
//     dispatch({type: 'increment'});
//   }
//   const decrementHandler = () => {
//     dispatch({type: 'decrement'});
//   }
//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// Class based Component (we can't use hooks in classes)
class Counter extends Component {

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// Maps redux state to props, counter will be accesible as this.props.counter
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

// Store dispatch actions to props, will be accesible as this.props.increment
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment'}),
    decrement: () => dispatch({ type: 'decrement'})
  }
};

// The redux connect function returns a new function. To this new function we pass the Counter component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);



import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // return a dispatch function that we can execute
  const dispatch = useDispatch();

  // useSelector => extract the part of the state that we need in this component (counter in our case)
  // Automatically sets up subscription to the redux store for this component. If store value changes => component is re-executed
  const counter = useSelector(state => state.counter)

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

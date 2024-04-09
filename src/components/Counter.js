import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {increment, decrement, addNumber, toggleCounter} from '../features/counterSlice.js'

const Counter = () => {

  const [ inputValue, setInputValue ] = useState(0)

  const counter = useSelector((state) => state.counter.value)
  const showCounter = useSelector((state) => state.counter.toggleCounter)
  const dispatch = useDispatch();

  const incrementHandler = (event) => {
    // dispatch({ type: 'counter/increment' })
    dispatch(increment())
  }

  const decrementHandler = (event) => {
    // dispatch({ type: 'counter/decrement' })
    dispatch(decrement())
  }

  const addNumberHandler = (event) => {
    // dispatch({ type: 'counter/addNumber', payload: inputValue })
    dispatch(addNumber(inputValue))
  }

  const toggleCounterHandler = () => { 
    // dispatch({type: "counter/toggle"})
    dispatch(toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <input type="number" placeholder='Type a Number' value={inputValue} onChange={(e)=>{setInputValue(parseInt(e.target.value))}}></input>
      <button onClick={addNumberHandler}>Add Number</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

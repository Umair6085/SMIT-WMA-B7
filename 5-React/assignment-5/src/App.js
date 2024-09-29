import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  
  const count = useSelector((state) => state.count);
  
  const dispatch = useDispatch();

  return (
    <div className="Card">
      <h1>Counter -- {count}</h1>
      <div className='btn-group'>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Remove</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Muhammad Umair All rights reserved.
      </footer>
    </div>
  );
}

export default App;
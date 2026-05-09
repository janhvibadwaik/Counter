import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const itemPrice = 100;
  const totalPrice = count * itemPrice;

  return (
    <div className="app">
      <div className="counter-card">
        <h1>Counter App</h1>
        <div className="info-box">
        <p>Items Added: {count}</p>
        <p>Price Per Item: ₹{itemPrice}</p>
        <p className="total-price">
        Total Price: ₹{totalPrice}
  </p>
</div>
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button className="btn btn-decrement"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            Decrement
          </button>
          <button className="btn btn-reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button className="btn btn-increment"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
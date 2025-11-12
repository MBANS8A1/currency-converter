import { useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, toFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

export default App;

// src/components/Withdraw.js
import React, { useState } from 'react';

const Withdraw = ({ onWithdraw }) => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    // Simulate withdraw action (replace with actual withdraw logic)
    const withdrawAmount = parseFloat(amount);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      onWithdraw(withdrawAmount);
    } else {
      alert('Invalid amount');
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;

// src/components/Transfer.js
import React, { useState } from 'react';

const Transfer = ({ onTransfer }) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleTransfer = () => {
    // Simulate transfer action (replace with actual transfer logic)
    const transferAmount = parseFloat(amount);
    if (!isNaN(transferAmount) && transferAmount > 0 && recipient.trim() !== '') {
      onTransfer(transferAmount, recipient);
    } else {
      alert('Invalid amount or recipient');
    }
  };

  return (
    <div>
      <h2>Transfer</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <label>
        Recipient:
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      </label>
      <br />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default Transfer;

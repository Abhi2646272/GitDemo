// src/components/Withdraw.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Deposit.css';

const Withdraw = ({ onWithdraw }) => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    // Simulate withdraw action (replace with actual withdraw logic)
    const withdrawAmount = parseFloat(amount);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      toast.success(`Amount ${withdrawAmount} debited successfully.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
      <ToastContainer />
    </div>
  );
};

export default Withdraw;

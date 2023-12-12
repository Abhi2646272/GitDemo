// src/components/Deposit.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Deposit.css';

const Deposit = () => {
  const [amount, setAmount] = useState('');
 

  const handleDeposit = () => {
    // Simulate deposit action (replace with actual deposit logic)
    const depositAmount = parseFloat(amount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      // onDeposit(depositAmount);
      toast.success(`Amount ${depositAmount} debited successfully.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      ;
    } else {
      alert('Invalid amount');
    }
  };

  return (
    <div>
      <h2>Deposit</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <button onClick={handleDeposit}>Deposit</button>
      <ToastContainer />
    </div>
  );
};

export default Deposit;

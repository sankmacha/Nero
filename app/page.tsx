// app/page.tsx

"use client";
import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState();
  const [days, setDays] = useState();
  const interestRate = 0.0444;

  const calculateSavings = () => {
    return amount * Math.pow(1 + interestRate / 365, days) - amount;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Investment Dashboard</h1>
      <input
        type="number"
        placeholder="Enter amount to invest"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={styles.input}
      />
      <input
        type="range"
        min="1"
        max="90"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        style={styles.rangeInput}
      />
      <p style={styles.label}>Days: {days}</p>
      <p style={styles.savings}>Potential Savings: ${calculateSavings().toFixed(2)}</p>
    </div>
  );
}

const styles: React.CSSProperties = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  rangeInput: {
    width: '80%',
    marginBottom: '20px',
  },
  label: {
    fontSize: '18px',
    color: '#555',
  },
  savings: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
};
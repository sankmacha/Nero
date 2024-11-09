// app/page.tsx

"use client";
import React, { useState } from 'react';

// Define a type for your styles
type Styles = {
  container: React.CSSProperties;
  title: React.CSSProperties;
  input: React.CSSProperties;
  inputFocus: React.CSSProperties;
  button: React.CSSProperties;
  buttonHover: React.CSSProperties;
  result: React.CSSProperties;
};

const SavingsCalculator: React.FC = () => {
  const [days, setDays] = useState<number>(1);
  const [amount, setAmount] = useState<number>(0);
  const [estimatedSavings, setEstimatedSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    const dailyRate = 0.01; // Example daily interest rate
    const savings = amount * Math.pow(1 + dailyRate, days);
    setEstimatedSavings(savings);
  };

  const styles: Styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#f9f9f9',
      maxWidth: '400px',
      margin: 'auto',
      transition: 'transform 0.2s',
    },
    title: {
      fontSize: '28px',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #0070f3',
      borderRadius: '4px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    inputFocus: {
      borderColor: '#005bb5',
    },
    button: {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#0070f3',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.2s, transform 0.2s',
    },
    buttonHover: {
      backgroundColor: '#005bb5',
      transform: 'scale(1.05)',
    },
    result: {
      marginTop: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#0070f3',
    } as React.CSSProperties,
  };

  // Add event handlers for input focus and button hover
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = styles.inputFocus.borderColor || '#0070f3';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#0070f3';
  };

  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor || '#005bb5';
    e.currentTarget.style.transform = styles.buttonHover.transform || 'scale(1)';
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.button.backgroundColor || '#0070f3';
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Savings Calculator</h1>
      <input
        type="number"
        min="1"
        max="90"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={styles.input}
        placeholder="Days to Invest (1-90)"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={styles.input}
        placeholder="Amount to Invest"
      />
      <button
        onClick={calculateSavings}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        style={styles.button}
      >
        Calculate
      </button>
      {estimatedSavings !== null && (
        <div style={styles.result}>
          Estimated Savings: ${estimatedSavings.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default SavingsCalculator;


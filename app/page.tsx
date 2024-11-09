"use client";

import React, { useState, CSSProperties } from 'react';

const InvestmentCalculator = () => {
    const [investment, setInvestment] = useState('');
    const [days, setDays] = useState(0);
    const [potentialSavings, setPotentialSavings] = useState(0);

    const calculatePotentialSavings = () => {
        const investmentAmount = parseFloat(investment) || 0;
        const dailyRate = Math.pow(1.044, 1/365) - 1;
        return investmentAmount * Math.pow(1 + dailyRate, days) - investmentAmount;
    };

    const handleCalculate = () => {
        setPotentialSavings(calculatePotentialSavings());
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.header}></h2>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>How much would you like to invest?</label>
                    <input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                        style={styles.input}
                        placeholder="Enter amount"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>How many days?</label>
                    <input
                        type="range"
                        min="0"
                        max="90"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                        style={styles.slider}
                    />
                    <div style={styles.daysDisplay}>Days: {days}</div>
                </div>
                <div style={styles.savingsBox}>
                    <h3 style={styles.savingsHeader}>Potential Savings</h3>
                    <p style={styles.savingsAmount}>${potentialSavings.toFixed(2)}</p>
                </div>
                <button 
                    onClick={handleCalculate}
                    style={styles.button}
                >
                    Calculate potential savings
                </button>
            </div>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    page: {
        backgroundColor: '#e0e0e0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: '30px',
        maxWidth: '500px',
        margin: 'auto',
        backgroundColor: '#333',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: '#fff',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    slider: {
        width: '100%',
        marginBottom: '10px',
    },
    daysDisplay: {
        textAlign: 'center',
        color: '#fff',
    },
    savingsBox: {
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        marginBottom: '20px',
    },
    savingsHeader: {
        margin: '0 0 10px 0',
        color: '#fff',
    },
    savingsAmount: {
        fontSize: '24px',
        color: '#007BFF',
        textAlign: 'center',
    },
    button: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    }
};

export default InvestmentCalculator;

import React from 'react';

function ExpenseList({ expenses, onDelete }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id}>
            {exp.description} - ${exp.amount} ({exp.category})
            <button onClick={() => onDelete(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default ExpenseList;
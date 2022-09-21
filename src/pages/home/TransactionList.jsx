import React from 'react'

// styles

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
            <p>{transaction.name}</p>
            <p>${transaction.amount}</p>
        </li>
      ))}
    </ul>
  )
}

export default TransactionList

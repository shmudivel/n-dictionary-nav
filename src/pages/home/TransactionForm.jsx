import { React, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

//styles
const style = {
    form: `p-5 bg-green-200 rounded-lg`,
    input: `block w-full p-5 mt-[8px] box-border text-black text-base`,
    label: ``,
  }

const TransactionForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()

        addDocument({
            uid: 
            name,
            amount
        });
    }

  return (
    <>
    <h3>Add a Transaction</h3>
    <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
            <span>Transaction name: </span>
            <input 
            className={style.input}
            type="text" 
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </label>

        <label className={style.label}>
            <span>Amount: </span>
            <input 
            className={style.input}
            type="number" 
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            />
        </label>

        <button>Add Transaction </button>
    </form>
      
    </>
  )
}

export default TransactionForm

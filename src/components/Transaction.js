import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStateSimple'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}  >
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li>
        </div>
    )
}

export default Transaction
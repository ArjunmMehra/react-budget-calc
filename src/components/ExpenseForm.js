import React from 'react'
import { MdSend } from 'react-icons/md'

export default function ExpenseForm(props) {
  const { handleCharge,handleAmount,handleSubmit,charge,amount } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
            <label htmlFor="charge">charge</label>
            <input 
                type="text" 
                className="form-control" 
                id="charge" 
                name="charge"
                placeholder="e.g. rent"
                onChange = {handleCharge}
                value = {charge}
            />
        </div>
        <div className="form-group">
            <label htmlFor="amount">amount</label>
            <input 
                type="number" 
                className="form-control" 
                id="amount" 
                name="amount"
                placeholder="e.g. 100"
                onChange={handleAmount}
                value={amount}
            />
        </div>
      </div>
      <button 
            type="submit" 
            className="btn"
        >
                submit
            <MdSend className="btn-icon"/>
      </button>
    </form>
  )
}

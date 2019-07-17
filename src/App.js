import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import uuid from 'uuid/v4'

const intialExpenses = [
  {id:uuid(),charge:"rent", amount: 1600},
  {id:uuid(),charge:"car payment", amount: 400},
  {id:uuid(),charge:"credit card bill", amount: 1200}
]
function App() {
   //******** State Values *************/
  const [expenses, setExpenses] = useState(intialExpenses)
  //***** Single Expense */
  const [charge, setCharge]= useState('')
  //***** Single Amount */
  const [amount, setAmount]= useState('')
  //alert
  const [alert,setAlert]= useState({show: false})
  
  //********** Functionality **********/

  //handle charge function
  const handleCharge = (e) =>{
      setCharge(e.target.value)
  }

  //handle amount function
  const handleAmount = (e) =>{
    setAmount(e.target.value)
  }

   //handle alert function
  const handleAlert = ({ type, text }) =>{
      setAlert({show: true, type, text })
      setTimeout(()=>{
      setAlert({show: false})
      },3000)
  }

  //handle submit function
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(charge !== '' && amount > 0){
      const singleExpense= { id: uuid(), charge, amount }
      setExpenses([...expenses,singleExpense])
      setCharge('')
      setAmount('')
      handleAlert({
        type: 'success',text: 'item added'
      })
    }
    else{
      handleAlert({
        type: 'danger',
        text: `charge can't be empty and amount value should be bigger than zero`
      })
    }
  }

  return (
      <>
        { alert.show && <Alert
                        type= {alert.type}
                        text= {alert.text}
        />}
        <h1>budget calculator</h1>
        <main className="App">
          <ExpenseForm 
              handleAmount={handleAmount} 
              handleCharge={handleCharge} 
              handleSubmit={handleSubmit}
              charge={charge}
              amount={amount}
          />
          <ExpenseList 
              expenses={expenses}
          />
        </main>
        <h1>
          total spending: <span className="total">
            $ {expenses.reduce((acc,{amount})=>acc+parseInt(amount),0)}
          </span>
        </h1>
      </>
  );
}

export default App;

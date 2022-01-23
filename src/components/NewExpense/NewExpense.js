import React,{useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    let [editForm,setEditFrom] = useState(false);

    const saveExpenseHandler=(enteredExpenseData)=>{
       const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
       }
    //    console.log(expenseData); 
       props.onAddExpense(expenseData);
       setEditFrom(false);
    }

    
    const cancelHandler = (event) => {   
        setEditFrom(false);
     } 

     const addExpensesHandler = (event) => {
        setEditFrom(true);
     }


return(
    <div className='new-expense'>
        {!editForm && <button onClick={addExpensesHandler}>Add Expense</button>}
        {editForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={cancelHandler} ></ExpenseForm>}
    </div>
);
};

export default NewExpense;
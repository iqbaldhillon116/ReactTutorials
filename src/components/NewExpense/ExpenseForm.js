import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {

   const [enteredTitle,setEneteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEneteredTitle(event.target.value);
    }

    const [enteredAmount,setEneteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setEneteredAmount(event.target.value);
    }

    const [enteredDate,setEneteredDate] = useState('');

    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value);
    }

    /* first alternative way to update state */

    // const [userInput,SetUserInput] = useState({
    //       enteredTitle:'',
    //       eneteredAmount:'',
    //       enteredDate:'',
    // });

    // const titleChangeHandler = (event) => {
    //     SetUserInput({
    //         ...userInput,
    //         eneteredTitle:event.target.value
    //     });
    // }


    // const amountChangeHandler = (event) => {
    //     SetUserInput({
    //         ...userInput,
    //         eneteredAmount:event.target.value
    //     });
    // }


    // const dateChangeHandler = (event) => {
    //     SetUserInput({
    //         ...userInput,
    //         eneteredDate:event.target.value
    //     });
    // }

    /* first alternative way to update state ends*/



    /* second alternative way to update state */
  
    
//     const [userInput,SetUserInput] = useState({
//         enteredTitle:'',
//         eneteredAmount:'',
//         enteredDate:'',
//   });

//   const titleChangeHandler = (event) => {
//       SetUserInput((prevState)=>{
//          return{ ...prevState,enteredTitle:event.target.value };
//       });
//   }


//   const amountChangeHandler = (event) => {
//     SetUserInput((prevState)=>{
//         return{ ...prevState,enteredAmount:event.target.value };
//      });
//   }


//   const dateChangeHandler = (event) => {
//     SetUserInput((prevState)=>{
//         return{ ...prevState,enteredDate:event.target.value };
//      });
//   } 

   /* second alternative way to update state ends */

return(
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-12' onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
);
};

export default ExpenseForm;
import React,{useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import reactDom from "react-dom";

const ExpenseItem = (props) => {
  // let title = props.title;
  /*array destructuring concept has been used over here.as we know useState will return two array elements 
  1)current prop value 
  2)updated value which is set by calling the function

  */
  const [title,setTitle] = useState(props.title);
  
//  const clickHandler = () =>{
//    /*this doesnot make any changes in ui because 
//     react do not loads the function again on click event
//     which means return statement is not executed twice
   
//     To resolve the above problem react introduces states
//    */
//    title='updated!!';
//     console.log('updated!!');
//   }

const clickHandler = () =>{
  setTitle('updated!!');
}
 return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;


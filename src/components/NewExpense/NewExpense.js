import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showCreateExpenseForm, setShowCreateExpenseForm] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {showCreateExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          handleHideForm={() => setShowCreateExpenseForm(false)}
        />
      ) : (
        <button onClick={() => setShowCreateExpenseForm(true)}>
          Add new Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;

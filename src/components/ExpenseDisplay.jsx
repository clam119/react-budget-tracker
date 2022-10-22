import { useState } from 'react';
import AddExpense from './AddExpense';
import RemoveExpense from './RemoveExpense';

const ExpenseDisplay = ( { setBudget } ) => {
    const [expenses, setExpenses] = useState([]);
    
    return (
        <section className="expense-display">
            <ul>
                {expenses.map((expense) => <li className={expense.id} key={expense.id}> {expense.item} {expense.cost} {<RemoveExpense expenses={expenses} setBudget={setBudget} setExpenses={setExpenses} />} </li>)}
            </ul>
            <AddExpense setBudget={setBudget} setExpenses={setExpenses} />
            
        </section>

    )
}

export default ExpenseDisplay;
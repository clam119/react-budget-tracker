import { useState } from 'react';

const AddExpense = ({ setBudget, setExpenses }) => {

    let [costInput, setCostInput] = useState('');
    let [expenseItem, setExpenseItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setCostInput((currentCostInput) => {

             let filterNums = /\d+/.test(currentCostInput)

             if(!filterNums) {
                return 0;
             }

            else {
                return costInput
            }
        });
        
        setExpenseItem(expenseItem);

        setExpenses((currentExpenses) => {
            const newExpenses = [...currentExpenses];
            newExpenses.push({id: newExpenses.length + 1, item: expenseItem, cost: costInput})
            return newExpenses
        })
        setBudget((currentBudget) => {
             const parsedCostInput = parseInt(costInput);
             const newBudget = currentBudget - parsedCostInput;
             return newBudget;
        })

    }

    const costChange = (e) => {
        setCostInput(e.currentTarget.value);
    }

    const itemChange = (e) => {
        setExpenseItem(e.currentTarget.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={costChange} placeholder="Enter Expense Amount Here"></input>
            <input type="text" onChange={itemChange} placeholder="Enter Expense Item Here"></input>
            <button>ADD EXPENSE</button>
        </form>
    )
}

export default AddExpense;
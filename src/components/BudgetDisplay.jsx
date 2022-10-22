import { useState } from 'react';
import ExpenseDisplay from './ExpenseDisplay';
import UserSetBudget from './UserSetBudget';

const BudgetDisplay = () => {
    const [budget, setBudget] = useState(0);
    
    return (
        <section className="budget-display">
            <h2>Current Budget: {budget} </h2>
            <UserSetBudget budget={budget} setBudget={setBudget} />
            <ExpenseDisplay setBudget={setBudget}/>
        </section>
    )
}

export default BudgetDisplay;
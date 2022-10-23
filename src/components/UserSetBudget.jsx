import { useState } from 'react';

const UserSetBudget = ({ budget, setBudget }) => {

    const [userInput, setUserInput] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userSetBudget = parseInt(e.target[0].value);
        setUserInput(userSetBudget)
        setBudget(userSetBudget)
    }
    return(
        <form onSubmit={( handleSubmit )}>
            <input type="number" placeholder="Enter your budget"></input>
            <button>ENTER BUDGET</button>
        </form>
    )
}

export default UserSetBudget;
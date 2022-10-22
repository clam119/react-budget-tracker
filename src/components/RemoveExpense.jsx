const RemoveExpense = ( {setBudget, setExpenses }) => {

    const handleRemove = (e) => {
        const regex = /[0-9]/g;
        const removedItem = e.target.parentElement.innerText;
        const removedItemCost = parseInt(removedItem.match(regex).join(''));

        e.preventDefault();

        setBudget((currentBudget) => {
            const updatedBudget = currentBudget + removedItemCost
            return updatedBudget;
        })
        setExpenses((currentExpenses) => {
            const removedItemId = parseInt(e.target.parentElement.className);
            const newExpenses = currentExpenses.filter((expense) => expense.id !== removedItemId);
            return newExpenses;
        })

    }

    return (
        <button onClick={handleRemove}>REMOVE</button>
    )
}

export default RemoveExpense;
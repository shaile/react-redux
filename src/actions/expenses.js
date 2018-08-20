import uuid from 'uuid';
//Add Expenses
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => (
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
        }
    );


//Remove Expense
export const removeExpense = ({id} = {}) => (
    {
        type:'REMOVE_EXPNSE',
        id
    }
);

//Edit Expense
export const editExpense = (id,update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});

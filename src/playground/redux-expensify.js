import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add Expenses
const addExpense = (
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
const removeExpense = ({id} = {}) => (
    {
        type:'REMOVE_EXPNSE',
        id
    }
);

//Edit Expense
const editExpense = (id,update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});

//Set Text
const setTextFilter = (text) => ({
    type:'SET_TEXT_FILTER',
    text
});

//Sort BY DATE
const sortByDate = () =>({
    type:'SORT_BY_DATE',
    sortBy:'date' 
});

//Sort BY AMOUNT
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT',
    sortBy:'amount' 
});

//SET START DATE
const setStartDate = (startedDate) => ({
    type:'SET_START_DATE',
    startedDate
});

//SET END DATE
const setEndtDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPNSE':
            return state.filter(({id}) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expense;
                }
            })    
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',//amount or date
    startedDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            } 
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:action.sortBy
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                amount:action.amount
            }   
        case 'SET_START_DATE':
            return {
                ...state,
                startedDate:action.startedDate
            }     
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }  
        default:
            return state;
    }

};

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate, }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){ 
            return a.amount > b.amount ? 1 : -1;
        }
        
    });
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Room Rent Piad by shaile', note: 'This is the last but not least', amount: 500 , createdAt:160}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', note: 'We are adding a new expense in this dispatch!', amount: 300, createdAt:1205}));

// console.log(expenseOne);

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

// store.dispatch(setTextFilter('Shaile'));

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate('125'));

// store.dispatch(setStartDate());

// store.dispatch(setEndtDate('1250'));

const demoState = {
    expenses: [{
        id: 'aksjdhaksjjda',
        description: 'January rent',
        note: 'This was the final payment for that address !!',
        amount: 7500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//amount or date
        startedDate: undefined,
        endDate: undefined
    }
};
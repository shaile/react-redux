
const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',//amount or date
    startedDate: undefined,
    endDate: undefined
};
export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            } 
        case 'SORT_DATA':
            return {
                ...state,
                sortBy:action.sortBy
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
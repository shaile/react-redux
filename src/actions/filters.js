//Set Text
export const setTextFilter = (text) => ({
    type:'SET_TEXT_FILTER',
    text
});

export const sortData = (sortBy) => ({
    type:'SORT_DATA',
    sortBy
});

//Sort BY DATE
export const sortByDate = () =>({
    type:'SORT_BY_DATE',
    sortBy:'date' 
});

//Sort BY AMOUNT
export const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT',
    sortBy:'amount' 
});

//SET START DATE
export const setStartDate = (startedDate) => ({
    type:'SET_START_DATE',
    startedDate
});

//SET END DATE
export const setEndtDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
});
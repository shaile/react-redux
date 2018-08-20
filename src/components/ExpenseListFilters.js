import React from 'react';
import { connect } from "react-redux";
import { setTextFilter, sortData } from "../actions/filters";

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text"
            value={props.filters.text}
            onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value));
        }} />    
        <select onChange={(e) => {
            props.dispatch(sortData(e.target.value))
            }}>
            <option>-Select-</option>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>  
    </div>
);

const mapStateToProp = (state) =>{
    return {
        filters:state.filters
    }
};

export default connect(mapStateToProp)(ExpenseListFilters);

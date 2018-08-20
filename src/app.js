import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' , amount:4500, createdAt:150}));
store.dispatch(addExpense({ description: 'Gas bill', amount:1400, createdAt:1250 }));
store.dispatch(addExpense({ description: 'Electic bill', amount:300, createdAt:1250 }));
store.dispatch(addExpense({ description: 'Credit bill', amount:800, createdAt:1250 }));
store.dispatch(addExpense({ description: 'Petrol bill', amount:400, createdAt:1250 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

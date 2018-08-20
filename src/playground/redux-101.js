import { createStore } from 'redux';

const add = ({a,b}) => {
  return a+b;
}
console.log(add({a:10, b:12}));

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count = 1} = {}) =>{
  return{
    type:'SET',
    count
  }
}


const resetCount = () =>{
  return{
    type:'SET',
    count:0
  }
}
const countRreducer = (state = { count: 1 }, action) => {
  switch(action.type) {    
    case 'INCREMENT':
      return {
        count:state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count:state.count - action.decrementBy
      }

    case 'SET':
    return {
      count:action.count
    }  
    case 'RESET':
      return {
        count: action.count
      }    
    default:
     return state;
  }  
}

const store = createStore(countRreducer); 


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions
// I'd like to increment the count
store.dispatch(incrementCount({incrementBy:8}));

// unsubscribe();
store.dispatch(incrementCount());

store.dispatch(incrementCount());


store.dispatch(decrementCount({decrementBy:3}));

store.dispatch(setCount({count:400}));

store.dispatch(resetCount());


//importing with plain node js
const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    counter: 0,
}
//REDUCER - only reducer can manipulate store
const rootReducer = (state = initialState, action) => {
    if(action.type==='INC_COUNTER'){
            return {
                ...state,
                counter: state.counter +1
            }
    }
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
}
    return state;
    //(state = initialState, action) -ES6 feature- if state is undefined 
    //- it will take in consider value after equal sign
}

//STORE
const store = createStore(rootReducer);
console.log(store.getState());


//SUBSCRIPTION METHODS
store.subscribe(()=>{
    console.log('SUBSCRIPTION' , store.getState());
})

//DISPATCHING ACTION
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER' , value: 10});
console.log(store.getState());





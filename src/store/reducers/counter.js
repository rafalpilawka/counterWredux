import * as actionTypes from '../actions';



const initialState ={
    counter: 0,

}
const reducer = (state = initialState , action)=>{
    switch (action.type){
       case actionTypes.INCREMENT:
        return{
            ...state,
            counter: state.counter +1
        };
        
        case actionTypes.DECREMENT:
        return{
            ...state,
            counter: state.counter -1
        };
        case actionTypes.ADDVALUE:
        return{
            ...state,
            counter: state.counter + action.value,
        }
        case actionTypes.SUBVALUE:
        return{
            ...state,
            counter: state.counter + action.value,
        }  
    }
    return state

}

export default reducer;

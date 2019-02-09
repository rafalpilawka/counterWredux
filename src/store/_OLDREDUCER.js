import * as actionTypes from './actions.js';

const initialState ={
    counter: 0,
    results: []

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
        case('STORE_RESULT'):
        return{
            ...state,
            results: state.results.concat({id:new Date() , value: state.counter})
            //we need to operate on new state - if we using push it will push to old state
        }      
        case('DELETE_RESULT'):
        // const newArray=[...state.results];
        // const id =2;
        // newArray.results.splice(id , 1);
        //const updatedArray=state.results.filter((result,index)=>index !== id)
        const updatedArray=state.results.filter(result => result.id !== action.resEl)
        return{
            ...state,
            results: updatedArray
        }          
    };     
    return state
};

export default reducer
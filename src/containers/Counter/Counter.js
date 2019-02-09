import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { bindActionCreators } from 'redux';
import * as actionTypes from '../../store/actions';
class Counter extends Component {


    

    onChangeInputHandler=(event)=>{
        console.log(event.target.value);
        
        //     const updatedOrderForm={
        //         ...this.state.orderForm
        //     }
        //    const updatedFormElement= {...updatedOrderForm[inputIdentifier]}
        //    updatedFormElement.value = event.target.value;
        //    updatedFormElement.valid =this.checkValidity
        //                         (updatedFormElement.value , updatedFormElement.validation);
        //    updatedFormElement.touched = true; // checking if element was active for typing
        //    updatedOrderForm[inputIdentifier]= updatedFormElement;
           
        //    let checkFormValidation = true;
    
        //    for(let inputIdentifier in updatedOrderForm){
        //        checkFormValidation = updatedOrderForm[inputIdentifier].valid && checkFormValidation;
               
        //    }
        // //    console.log(updatedOrderForm[inputIdentifier].valid);
        //    this.setState({
        //     orderForm: updatedOrderForm , 
        //     formIsValid: checkFormValidation});
        //    // console.log(updatedFormElement, updatedFormElement.value.length);
        //    console.log(updatedFormElement);
        // }

    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAddCounter} changed={this.onChangeInputHandler} />
                <CounterControl label="Subtract" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strRes=>(
                        <li style={{cursor: 'pointer'}} key={strRes.id} onClick={()=>this.props.onDeleteResult(strRes.id)}>{strRes.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.results

        //COMBINED REDUCERS MAKING NESTED OBJECTS FOR REDUCERS
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: ()=>dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: ()=>dispatch({type: 'DECREMENT'}),
        onAddCounter: ()=>dispatch({type: 'ADDVALUE', value: 5 // or Payload
    }),
        onSubtractCounter: ()=>dispatch({type: 'SUBVALUE', value: -5}),
        onStoreResult: (result)=>dispatch({type:actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id)=>dispatch({type:'DELETE_RESULT' , resEl: id}),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);
//                       state               Actions
// providing state and actions dispatch for connect functions
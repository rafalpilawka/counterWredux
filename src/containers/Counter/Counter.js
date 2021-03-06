import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: ()=>dispatch({type:'INCREMENT'}),
        onDecrementCounter: ()=>dispatch({type: 'DECREMENT'}),
        onAddCounter: ()=>dispatch({type: 'ADDVALUE', value: 5}),
        onSubtractCounter: ()=>dispatch({type: 'SUBVALUE', value: -5})
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);
//                       state               Actions
// providing state and actions dispatch for connect functions
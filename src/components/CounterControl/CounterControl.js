import React, { Component } from 'react';
import './CounterControl.css';




class CounterControl extends Component {
 
    render(){

        let inputDiv=null;

    if (this.props.label === 'Add' || this.props.label ==='Subtract' ){
        inputDiv=(
             <input type='text' value={this.props.value} onChange={this.props.changed}></input>
        );
    }
         
         return  (<div>
            <div className="CounterControl" onClick={this.props.clicked}>
                {this.props.label}
                
            </div> 
            {inputDiv}
        </div>)


    } ;
 


}
 
   

export default CounterControl;
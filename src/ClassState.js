import React, { Component } from "react";
class ClassState extends Component{
    constructor(){
        super()
        this.state={
           count:0
        }
    }
    increment =()=>{
        this.setState({count : this.state.count+1});
    }
    decrement=()=>{
        this.setState({count : this.state.count-1});
    }
    
    render(){
        return(
            <div>
               {this.state.count}
               <button onClick={this.increment}>Increment</button>
               <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }

}
export default ClassState;

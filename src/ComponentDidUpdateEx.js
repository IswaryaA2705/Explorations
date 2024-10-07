import { Component } from "react";
class ComponentDidUpdateEx extends Component{
    constructor(){
        super()
        this.state=({
            count:0
        })
    }
    increment=()=>{
        this.setState({count:this.state.count+1})

    }
    decrement=()=>{
        this.setState({count:this.state.count-1})

    }
    componentDidUpdate(prevProp,prevState){
        if(prevState!==this.state.count)
            console.log("count",this.state.count)
    }
    render(){
        return(
            <div>
                {this.state.count}
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

}
export default ComponentDidUpdateEx;
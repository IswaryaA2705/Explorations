import { Component } from "react";
class LifeCycleExample extends Component{
    constructor(){
        super()
        this.state ={
            date: new Date()
         
        }
    }
    componentDidMount(){
        this.timeInverval = setInterval(
            () => this.tick(),1000
    )


    }
    tick(){
    this.setState({
        date: new Date()
    });
}
    componentWillUnmount(){
            clearInterval(this.timerID);
          }
          render(){
            return(
                <div>{this.state.date.toLocaleString()}</div>
            )
          }
}

export default LifeCycleExample
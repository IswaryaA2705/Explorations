import { Component } from "react";
class ErrorBoundary extends Component{
    constructor(props){
        super()
        this.state={hasError:false}
    }
    static getDerivedStateFromError(){
       return {hasError:true}
    }
    componentDidCatch(error, info) {
        console.log("Error caught:", error);
        console.log("Error info:", info);
      }
      render() {
        if (this.state.hasError) {
          return <h2>Something went wrong.</h2>; 
        }
        return this.props.children; 
      }
}
export default ErrorBoundary;
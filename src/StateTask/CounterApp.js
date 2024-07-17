import { Component } from "react";
import "./counter.css"

class Counter extends Component{


    // constructor(){
    //     super()
    //     this.state={
    //         count:0,

    //     }
    // }
    // increment(value){
    //     this.setState({count: this.state.count+1})
    // }
    // decrement(){
    //     this.setState({count:this.state.count-1})
    // }
    // reset(){
    //     this.setState(
    //         {
    //             count:0
    //         }
    //     )
    // }

    // render(){
    //     return(
    //         <div>
    //             <h3>Counter App</h3>
    //             <h4>{this.state.count}</h4>
    //             <button onClick={()=>this.increment(1)}>+</button>
    //             <button onClick={()=>this.decrement()}>-</button>
    //             <button onClick={()=> this.reset()}>Reset</button>
    //         </div>
    //     )
    // }


    state ={
        count:0,
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1,

        },()=>{})
    }
    decrement=()=>{
        this.setState({
            count:this.state.count?this.state.count -1:0
        },()=>{})
    }
    reset=()=>{
       this.setState({count:0},()=>{})
    }

    render(){
        return(
            
            <div className="count">
                {/* <h1>My Count app:</h1> */}
                <h2 className="countnum">{this.state.count}</h2>
                <button onClick={this.decrement} className="btn">Decrement</button>
                <button onClick={this.increment } className="btn">Increment</button>
                 
                 <button onClick={this.reset} className="btn">Reset</button>
            </div>
        )
    }




}
 



export default Counter;




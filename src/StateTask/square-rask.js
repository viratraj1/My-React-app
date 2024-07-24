import { Component } from "react";

import "./square.css"


class SquareComponent extends Component{
    state={
        squarearray:[],
        ispop:false,
    }
    addSquareHandler=()=>{
        const newState=[...this.state.squarearray,1];
        this.setState({
            squarearray:newState,
        })

    }
    backcolor=()=>{
        this.setState({
            ispop:!this.state.ispop,
        },()=>{})
    }
    render(){
        return (
            <>
            <h1>Sqaure Component</h1>
            <button onClick={this.addSquareHandler}>Add Sqaures</button>

         

            {
                this.state.squarearray.map((each,index)=>{
                   return(
                    <div className="imggrid">
                     <div  className={(index+1)%2===0 && this.state.ispop ? "squaretask-highlight":"squaretask-not-highlight"} onClick={ this.backcolor}>
                    {index+1}
            </div>


            <div  className={(index+1)%2===0 ? "firstclick1":"firstclick2"}>
                    {index+1}
            </div>
            </div>

                   )
            
            
                })
            }

            </>
        )
            
        
    }
}



export default SquareComponent;
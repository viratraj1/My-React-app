import { Component } from "react";


class Myclass extends Component{
    state={
      name:"raj"
    }
    render(){
        return(
          <div>
            <h2>{this.state.name}</h2>
          </div>
        )
    }
}


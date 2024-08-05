// import { Component } from "react";

// class Fakeapis extends Component{

//     state ={
//         products:[],
//         loader:true,
//         error:false
//     }
//     fetchProduct=()=>{
//        fetch("https://fakestoreapi.com/products")
//        .then((res)=> res.json())
//        .then((data)=> this.setState({products:data,loader:false}))
//     }
//     render(){
//         return(
//             <div>

//              <button onClick={this.fetchProduct}>fetch data</button>
//              {
//                 this.state.loader ? (
//                     <h2>Please wait ....</h2>
//                 ):(
//                     <div>
//                         {
//                             this.state.products.map((each)=>{
//                                <h3>{each.id}</h3>
//                             })
//                         }
//                     </div>
//                 )
//              }

//             </div>
//         )
//     }
// }


// export default Fakeapis;



import React, { Component } from 'react';

class Fakeapis extends Component {
    state = {
        products: [],
        loader: true,
        error: false
    };

    fetchProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => this.setState({ products: data, loader: false }))
            .catch((error) => this.setState({ error: true, loader: false }));
    };

    render() {
        return (
            <div>
                <button onClick={this.fetchProduct}>Fetch Data</button>
                {this.state.loader ? (
                    <h2>Please wait ....</h2>
                ) : this.state.error ? (
                    <h2>Something went wrong!</h2>
                ) : (
                    <div>
                        {this.state.products.map((each) => (
                            <div key={each.id}>
                                <h3 >{each.id}</h3>
                                <img src={each.image}/>
                                <h4>{each.title}</h4>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Fakeapis;


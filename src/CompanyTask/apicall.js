import axios from "axios";
import { Component } from "react";
import "./Company.css"


const imges=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWWAf6EegDYLIILlaS8M36gKeoyO2GqKEuQ&s",
    "https://i.pinimg.com/474x/6d/f3/14/6df3140e76f21ca6529c3ab778661eff.jpg",
    "https://i.pinimg.com/originals/5e/f9/4e/5ef94e329f3a2c3e22434b56aba8fa1c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1pcVEbqE4DmBULUmcn52Fct_KksB3GsaJA&s",
    "https://images3.alphacoders.com/273/thumbbig-273555.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWWAf6EegDYLIILlaS8M36gKeoyO2GqKEuQ&s",
    "https://i.pinimg.com/474x/6d/f3/14/6df3140e76f21ca6529c3ab778661eff.jpg",
    "https://i.pinimg.com/originals/5e/f9/4e/5ef94e329f3a2c3e22434b56aba8fa1c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1pcVEbqE4DmBULUmcn52Fct_KksB3GsaJA&s",
    "https://images3.alphacoders.com/273/thumbbig-273555.webp",
]

class CompanyTask extends Component {
    state = {
        Additems: [],
        loader: true,
        error: false
    }

    fetchTasks = async () => {
        try {
            const { status, data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            if (status === 200) {
                this.setState({
                    Additems: data,  // Directly setting data received from API
                    loader: false
                });
            }
        } catch (err) {
            console.error("Error fetching tasks:", err);
            this.setState({
                error: true,
                loader: false
            });
        }
    }

    componentDidMount() {
        this.fetchTasks();
    }

    render() {
        return (
            <div>
                {this.state.loader ? (
                    <h2>Please wait....</h2>
                ) : (
                    <div className="company">
                 
                        {this.state.Additems.map((eachitem,index) => (
                            <div key={eachitem.id} className="border-item">
                               
                                <h4>ID: {eachitem.id}</h4>
                                <h2>Name: {eachitem.name}</h2>
                                <img src={imges[index]} />
                                <h3><span>Username:</span>{eachitem.username}</h3>
                                <h4><span>email</span>:{eachitem.email}</h4>
                               <h3>User Address :{eachitem["address"]["street"]}
                               </h3>
                               <h3> Suite:{eachitem["address"]["suite"]}
                             </h3>
                             <h3>  city:{eachitem["address"]["city"]}
                            </h3>
                            <h3>zipcode: {eachitem["address"]["zipcode"]}</h3>
                            </div>
                        ))}
                    </div>
                  
                )}
            </div>
        );
    }
}

export default CompanyTask;

import { Component } from "react";
import axios from "axios";
import "./recipes.css"
import Table from 'react-bootstrap/Table';

class RecipeList extends Component {
    state={
        Recipes:[],
        loader:true,
        error:false,
    }

    FetchRecipes=async()=>{
        try{
      const {status,data}=await axios.get('https://dummyjson.com/recipes')
           
           if(status === 200){
            this.setState({
                Recipes:data.recipes,
                loader:false,
            })
           }
           console.log(this.state.Recipes)

    }catch (err){
        this.setSate({
            error:true,
            loader:false,
        })

    }}

    componentDidMount(){
        this.FetchRecipes()
        console.log("Recipes")
    }
    render(){
       
        return(
            
            <div>

          {
            this.state.loader ?
            <h3>Please wait....</h3>:
            <>
            <div className="parentdiv">
            {
            
                                  
                 
            <Table striped bordered hover>
            <thead>
             
                <th>id</th>
                <th>Each_item</th>
                <th>ingredients</th>
                <th>rating</th>
           
            </thead>

         {
          this.state.Recipes.map((eachRecipe)=>(
            <tbody>
            <tr key={eachRecipe.id}>
              <td>{eachRecipe.id}</td>
              <td>{<img src={eachRecipe.image} className="Recipsimg"/>}</td>
              <td><li>{eachRecipe.ingredients}</li></td>
              <td>{eachRecipe.rating}</td>
            </tr>
           
          </tbody>
          ))
         }
          



          </Table>


                    // <div className="borderimg">
                    // <h4>{name}</h4>
                    // <h1>{eachRecipe.id}</h1>
                    // <img src={eachRecipe.image} className="Recipsimg"/>
                    // <h3><span>Ingredients</span>{eachRecipe.ingredients}</h3>
                    // <h4><span>Rating</span>={eachRecipe.rating}</h4>
                    // </div>
                   
                 
                
            }
             </div>
                </>
          }
            

            </div>
            
            
        )
    }
}



export default RecipeList;

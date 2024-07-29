



import { Component } from "react";
import axios from "axios";
import "./prodect.css"



class RecipeList1 extends Component {
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
            <div>
            
                
            <img src="https://cdn.siasat.com/wp-content/uploads/2024/05/Virat-Kohli-3.jpg" className="resimg"/>


            <h1 className="onevk">One 18 </h1>
            <h2 className="llll">RecipeList</h2>
          <div  className="gridList">
          
               
         {
          this.state.Recipes.map((eachRecipe)=>(
             <div className="box">
               
                    {/* <h1>{eachRecipe.id}</h1> */}
                    <img src={eachRecipe.image} className="Recipsimg"/>
                    <h2>{eachRecipe.name}</h2>
                     <h3><span>Ingredients</span>{eachRecipe.ingredients}</h3>
                    <h4><span>Rating</span>={eachRecipe.rating}</h4>
                    </div>
          ))
         }
         
          </div>
      
                
            
             </div>
                </>
          }
            

            </div>
            
            
        )
    }
}



export default RecipeList1;

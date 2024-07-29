
import { Component } from "react";
import axios from "axios";
import "./prodect.css"



class Menu extends Component {
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
                
          
          <div  className="gridList">
          
               
         {
          this.state.Recipes.map((eachRecipe)=>(
             <div className="mlist">
               
                    {/* <h1>{eachRecipe.id}</h1> */}
                    <img src={eachRecipe.image} className="menulist"/>
                    <h2>{eachRecipe.name}</h2>
                   
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



export default Menu;

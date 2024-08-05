import { Component } from "react";
import axios from "axios";
import "./prodect.css";
import { Link } from "react-router-dom";


class RecipeList1 extends Component {
  state = {
    Recipes: [],
    loader: true,
    error: false,
  };

  FetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");

      if (status === 200) {
        this.setState({
          Recipes: data.recipes,
          loader: false,
        });
      }
      console.log(this.state.Recipes);
    } catch (err) {
      this.setSate({
        error: true,
        loader: false,
      });
    }
  };

  componentDidMount() {
    this.FetchRecipes();
    console.log("Recipes");
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <h3>Please wait....</h3>
        ) : (
          <>
            <div>
              <img
                src="https://c.ndtvimg.com/2021-10/d13ide1o_one8-commune_625x300_06_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                className="resimg"
              />

              <h1 className="onevk">One 18 </h1>
              <h2 className="llll">RecipeList</h2>
              <div className="gridList">
                {this.state.Recipes.map((eachRecipe) => (
                  <div className="box" key={eachRecipe.id}>
                    <img src={eachRecipe.image} className="Recipsimg" />
                  
                    <h2>{eachRecipe.name}</h2>

                    <h4>
                      <span>Rating</span>={eachRecipe.rating}
                    </h4>
                    <button className="bcbtn">
                      <Link to={`/${eachRecipe.id} `} className="fid">
                        See More
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default RecipeList1;

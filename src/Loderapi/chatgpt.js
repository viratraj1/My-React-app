import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const UseStateEx1 = () => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setList(response.data.recipes);
        setLoader(false);
      }
    } catch (error) {
      setError(true);
      setLoader(false);
    }
  };

  const deleteHandler = (index) => {
    const filteredList = list.filter((_, ind) => ind !== index);
    setList(filteredList);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Ingredients</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {list.map((eachRecipe) => (
            <tr key={eachRecipe.id}>
              <td>{eachRecipe.id}</td>
              <td><img src={eachRecipe.image} alt="Recipe" className="recipe-img" /></td>
              <td>{eachRecipe.ingredients.join(", ")}</td>
              <td>{eachRecipe.rating}</td>
              <td><button onClick={() => deleteHandler(eachRecipe.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      {loader && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
    </div>
  );
};

export default UseStateEx1;

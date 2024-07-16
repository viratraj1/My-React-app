

import "./food.css"

import Foodarray from "./fakeapi"

const List=()=>{
    <div className="navbar"> 

    </div>
return(

   
    <div className="parent" >
          
         
        {
            Foodarray.map((eachitem) => (

               <div key={eachitem.id} className="allitems">

                 

                {/* <img src="Foodarray.image" height={200} width={200}/> */}

                <img src={eachitem.image} />

                <h1>Id:{eachitem.id}</h1>
    
                <h1><span>Name</span>:{eachitem.name}</h1>
                <h3><span>Ingredients</span>:{eachitem.ingredients}</h3>
                <h3><span>UserId</span>:{eachitem.userId}</h3>
                <h3><span>UserId</span>:{eachitem.rating}</h3>





                </div>
            ))
        }
    </div>
)

}

export default List;


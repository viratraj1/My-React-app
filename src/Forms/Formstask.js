import { useRef, useState } from "react";
import "./Form.css"
const Forms_login=()=>{    
        const  email_reg = useRef();
        const  password_reg = useRef();
        const  mobile_reg = useRef();
        const  name_reg = useRef();
        const [error,setError]= useState(null);
  
    const changeHandle = (reg) => {
          reg.preventDefault();
          const emailenter = email_reg.current.value;
          const password = password_reg.current.value;
          const mobile = mobile_reg .current.value;
          const name1 =  name_reg.current.value;

         


          if(emailenter.length > 1 && password.length < 9&&
            (password.length > 1 && mobile.length < 10)&&
            (mobile.length > 1 && name1.length < 20)&&
            (mobile.name1 > 1 && name1.length < 15)

            
          )
          {
          

            localStorage.setItem('changeHandle', JSON.stringify(changeHandle));
            alert('Registration successful!');
          }
          else{
            setError("enter correct details")
          }
    }

  

    return(
        <div>
          <h1 className="rg">Register_Form</h1>


      <form onSubmit={changeHandle} className="form-task">
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input 
    
    type="text"
    className="form-control"
    id="email"
    placeholder="Enter email"
    name="email"
    ref={email_reg}
    
    />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input 
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          ref={password_reg}
       
    />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">mobile:</label>
    <input 
    type="mobile"
    className="form-control"
    id="pwd"
    placeholder="Enter password"
    name="mb"
    ref={ mobile_reg}
    
    />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">name:</label>
    <input 

type="name"
className="form-control"
id="name"
placeholder="Enter name"
name="nm"
ref={name_reg}
    
    
    />
  </div>
  <div className="checkbox">
    <label>
      <input type="checkbox" /> Remember me
    </label>
  </div>
  {error}
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
        </div>
    )
}

export default Forms_login;





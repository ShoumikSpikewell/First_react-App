import  axios  from "axios";
import React, { useState } from "react";
import {useNavigate}  from 'react-router-dom'

const AddUser = () => {
  let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"" 
    });

      var styles={
        textAlign:'center'
      };

    const {name,username,email}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submitForm= async (e)=>
    {
      e.preventDefault()
      await axios.post("http://localhost:3001/users",user);
    //  await axios({
    //     method: 'post',
    //     url: 'http://localhost:3001/users',
    //     data: user
    //   });
      navigate('/');
    }
  return (
    <div>
      <div className="container">
      <h1 style={styles}>Add the User</h1>
        <form onSubmit={e=>submitForm(e)}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              onChange={e=>onInputChange(e)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="username"
              value={username}
              onChange={e=>onInputChange(e)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputPassword2"
              name="email"
              value={email}
              onChange={e=>onInputChange(e)}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Add User 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

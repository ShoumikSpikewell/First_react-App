import React, { useState } from "react";

const AddUser = () => {
    const [user,setUser]=useState({
        pname:"",
        username:"",
        email:"" 
    });
    const {pname,username,email}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.pname]: e.target.value})
    }
  return (
    <div>
      <h1>Add the User</h1>
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="pname"
              value={pname}
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
            Add User 👍
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

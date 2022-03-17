import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home= () =>
{
    const [users,setUser]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers= async () =>
    {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Homepage</h1>
                <table class="table table-hover border shadow">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>
                            (
                                <tr>
                                    <th scope='row'>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <a className='btn btn-primary me-2' >View</a>
                                        <a className='btn btn-outline-primary me-2' >Edit</a>
                                        <a className='btn btn-danger' >Delete</a>
                                    </td>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
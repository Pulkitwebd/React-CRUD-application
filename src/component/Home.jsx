import React, { useState, useEffect } from "react";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom"
import Delete from "@mui/icons-material/Delete";

const Home = () => {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3002/users");
    setUser(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    alert("Deleted")
    getData();
  }
  return (
    <>
      <div className="container my-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Gmail</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => {
              const { id, name, username, email } = data;
              return (
                <tr key={index}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td><Link to={`/users/${id}`}><button className="btn"><RemoveRedEyeIcon/></button></Link></td>
                  <td><Link to={`/edit/${id}`}><button className="btn"><EditIcon/></button></Link></td>
                  <td><button className="btn" onClick={() => handleDelete(id)} ><DeleteIcon/></button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

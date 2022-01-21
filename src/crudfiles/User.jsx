import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  const loadView = async () => {
    const response = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(response.data);
  };

  useEffect(() => {
    loadView();
  }, []);

  
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;

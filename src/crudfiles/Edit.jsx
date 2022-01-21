import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    phoneno: "",
    website: "",
  });

  const { name, username, email, phoneno, website } = userData;
  const handleRequest = async () => {
    const response = await axios.get(`http://localhost:3002/users/${id}`);
    setUserData(response.data);
  };

  useEffect(() => {
    handleRequest();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
   console.log("done")
   await axios.put(`http://localhost:3002/users${id}`, userData);
   navigate("/")
  };

  return (
    <>
      <div className="container py-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group py-2">
            <label htmlFor="exampleInputPassword1">Name :</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="exampleInputPassword1">User Name :</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="User Name"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="exampleInputPassword1">Phone No. :</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Phone No."
              name="phoneno"
              value={phoneno}
              onChange={handleChange}
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="exampleInputEmail1">Website</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Website"
              name="website"
              value={website}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">Edit User</button>
        </form>
      </div>
    </>
  );
};

export default Edit;

import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Add = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    phoneno: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async(e) => {
   e.preventDefault();
   await axios.post("http://localhost:3002/users", formValues);
   navigate("/")
  }

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
              value={formValues.name}
              placeholder="Name"
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
              value={formValues.username}
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
              value={formValues.phoneno}
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
              value={formValues.email}
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
              value={formValues.website}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">Add User</button>
        </form>
      </div>
    </>
  );
};

export default Add;

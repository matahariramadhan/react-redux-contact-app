import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber) {
      return toast.warning("Please Fill the Fields!");
    }

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkPhoneNumber = contacts.find(
      (contact) => contact.phoneNumber === phoneNumber && phoneNumber
    );

    if (checkEmail) {
      return toast.error("This email already exists!");
    }
    if (checkPhoneNumber) {
      return toast.error("This phone number already exists!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      phoneNumber,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added successfully");
    history.push("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 py-5 text-center">Add Student</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-1">
              <input
                type="text"
                placeholder="Name"
                className="form-control p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="email"
                placeholder="Email"
                className="form-control p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control p-3"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                type="submit"
                placeholder="Add Student"
                className="btn btn-dark btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

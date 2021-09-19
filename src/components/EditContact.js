import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const param = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const id = parseInt(param.id);

  const currentContact = contacts.filter((contact) => contact.id === id);

  useEffect(() => {
    if (currentContact) {
      setName(currentContact[0].name);
      setEmail(currentContact[0].email);
      setPhoneNumber(currentContact[0].phoneNumber);
      console.log("current Contact");
    }

    return () => {
      setName("");
      setEmail("");
      setPhoneNumber("");
      console.log("return clean up");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber) {
      return toast.warning("Please Fill the Fields!");
    }

    const checkEmail = contacts.find(
      (contact) => contact.id !== id && contact.email === email
    );
    const checkPhoneNumber = contacts.find(
      (contact) => contact.id !== id && contact.phoneNumber === phoneNumber
    );

    if (checkEmail) {
      return toast.error("This email already exists!");
    }
    if (checkPhoneNumber) {
      return toast.error("This phone number already exists!");
    }

    const data = {
      id,
      name,
      email,
      phoneNumber,
    };

    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? data : contact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: updatedContacts });
    toast.success("Student edited successfully");
    history.push("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 py-5 text-center">Edit Contact {id}</h1>
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
                value="Update Student"
                className="btn btn-dark"
              />
              <Link to="/" className="btn btn-danger ms-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    const filteredContact = contacts.filter(
      (contact) => contact.id !== id && contact
    );

    dispatch({ type: "DELETE_CONTACT", payload: filteredContact });
    toast.success("Contact successfully deleted");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>
                    <Link
                      to={`/edit/${id}`}
                      className="btn btn-small btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function UpdateScreen(props) {
  const useParam = useParams();

  //   const [employee, setEmployee] = useState("employee");
  const [newFirstName, setNewFirstName] = useState(props.employee.fname);
  const [newLastName, setNewLastName] = useState(props.employee.lname);
  const [newEmail, setNewEmail] = useState(props.employee.email);
  const [newContact, setNewContact] = useState(props.employee.phone);

  const updateHandler = async () => {
    try {
      await axios.post(`http://localhost:5001/api/emp/edit/${useParam.id}/`, {
        newFirstName,
        newLastName,
        newEmail,
        newContact,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* handle update  */}
      <form
        className="container-sm grid grid-cols-1 gap-4"
        onSubmit={updateHandler}
      >
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2"
          placeholder="First Name"
          onChange={(e) => setNewFirstName(e.target.value)}
          value={newFirstName}
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => setNewLastName(e.target.value)}
          placeholder="Last Name"
          value={newLastName}
        />
        <input
          type="email"
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Email"
          value={newEmail}
        />
        <input
          type="number"
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => setNewContact(e.target.value)}
          placeholder="Phone"
          value={newContact}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateScreen;

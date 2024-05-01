import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/emp/add/", {
        fname,
        lname,
        email,
        contact,
      });

      setFname("");
      setLname("");
      setEmail("");
      setContact("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const saveAndAddNewHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/emp/add/", {
        fname,
        lname,
        email,
        contact,
      });

      setFname("");
      setLname("");
      setEmail("");
      setContact("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`container-sm mx-auto mt-10 `}>
      <div>
        <FontAwesomeIcon onClick={() => navigate("/")} icon={faArrowLeft} />
      </div>
      <form
        className="container-sm grid grid-cols-1 gap-4"
        onSubmit={addHandler}
      >
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="email"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded width=sm">
          Submit
        </button>
        <button
          type="button"
          onClick={saveAndAddNewHandler}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Save and Add New
        </button>
      </form>
      <div className="mt-4"></div>
    </div>
  );
}

export default Add;

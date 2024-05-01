import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateScreen from "../components/UpdateScreen";

function EmployeeDetails() {
  const navigate = useNavigate();
  const useParam = useParams();

  const [employee, setEmployee] = useState("");
  const [show, setShow] = useState(false);

  const handleUpdate = () => {
    setShow(true);
  };
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/emp/${useParam.id}/`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/emp/${useParam.id}/`
        );
        // console.log(response.data);
        setEmployee(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getEmployee();
  }, []);

  return (
    <div className={`container-sm mx-auto mt-10 `}>
      <div>
        <FontAwesomeIcon onClick={() => navigate("/")} icon={faArrowLeft} />
      </div>
      <div className="flex">
        <div className="row-lg-12">
          <img
            src="https://as2.ftcdn.net/v2/jpg/06/29/92/09/1000_F_629920938_p8DLNZyXHz4V3zjzUYp7EpM57nMnZuKT.jpg"
            // height={300}
            width={500}
            alt="sample image"
          />
        </div>
        <div>
          <div className="">
            <p>
              <b>Full Name: </b>
              {employee.fname} {employee.lname}
            </p>
            <p>
              <b>Email: </b>
              {employee.email}
            </p>
            <p>
              <b>Contact:</b> {employee.phone}
            </p>
            <p>
              <b>Account Number:</b> {employee._id}
            </p>
            <div>
              <button className="btn btn-secondary mr-2" onClick={handleUpdate}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={deleteHandler}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {show && <UpdateScreen employee={employee} />}
    </div>
  );
}

export default EmployeeDetails;

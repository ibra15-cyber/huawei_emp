import { useCallback, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeScreen() {
  const navigate = useNavigate();

  //HANDLE get request
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/emp/");
        // console.log(response);
        setEmployees(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array to ensure the effect runs only once

  //handle delete request
  const deleteHandler = useCallback(async (empId) => {
    try {
      await axios.delete(`http://localhost:5001/api/emp/${empId}/`);
      console.log(empId);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="mt-5">
          <table className="table table-striped table-hover flex-wrap">
            <thead>
              <tr className="px-4 py-2 border border-gray-300 text-center bg-inherit">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee._id}
                  className=" table-active px-4 py-2 border border-gray-300 text-center"
                >
                  <td>{employee.fname}</td>
                  <td>{employee.lname}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  {/* <td>{employee._id}</td> */}
                  <td>
                    <div>
                      <button
                        // theres's a place for this; used when you wnat to go to the next screen
                        onClick={() => navigate(`/more/${employee._id}`)}
                        className="btn btn-primary mx-2"
                        type="button"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => deleteHandler(employee._id)}
                        className="btn btn-danger"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex-1 justify-content-left">
            <button
              className="btn btn-primary "
              onClick={() => navigate("/add")}
            >
              Add Employee
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomeScreen;

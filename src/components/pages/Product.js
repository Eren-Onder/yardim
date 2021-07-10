import "./Product.css";
import { useState } from "react";
import Axios from "axios";

function Product() {
  const [name, setName] = useState("");
  const [kanton, setKanton] = useState("");
  const [stadt, setStadt] = useState("");
  const [strasse, setStrasse] = useState("");
  const [wohn, setWohn] = useState(0);
  const [erforderlich, setErforderlich] = useState("");
  const [hbd, setHbd] = useState("");
  const [hilftArt, setHilftArt] = useState("");
  const [email, setEmail] = useState("");
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    console.log(name);
    Axios.post("http://localhost:4000/", {
      name: name,
      kanton: kanton,
      stadt: stadt,
      strasse: strasse,
      wohn: wohn,
      erforderlich: erforderlich,
      hbd: hbd,
      hilftArt: hilftArt,
      email: email,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          kanton: kanton,
          stadt: stadt,
          strasse: strasse,
          wohn: wohn,
          erforderlich: erforderlich,
          hbd: hbd,
          hilftArt: hilftArt,
          email: email,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:4000/").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:4000/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Hilfestelle Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Kanton:</label>
        <input
          type="text"
          onChange={(event) => {
            setKanton(event.target.value);
          }}
        />
        <label>Stadt:</label>
        <input
          type="text"
          onChange={(event) => {
            setStadt(event.target.value);
          }}
        />
        <label>Strasse:</label>
        <input
          type="text"
          onChange={(event) => {
            setStrasse(event.target.value);
          }}
        />
        <label>Wohnung Nummer:</label>
        <input
          type="number"
          onChange={(event) => {
            setWohn(event.target.value);
          }}
        />
        <label>Erforderlich:</label>
        <input
          type="text"
          onChange={(event) => {
            setErforderlich(event.target.value);
          }}
        />
        <label>Halbarkeitsdatum:</label>
        <input
          type="text"
          onChange={(event) => {
            setHbd(event.target.value);
          }}
        />
        <label>Art der Hilfe:</label>
        <input
          type="text"
          onChange={(event) => {
            setHilftArt(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Kanton: {val.kanton}</h3>
                <h3>Stadt: {val.stadt}</h3>
                <h3>Strasse: {val.strasse}</h3>
                <h3>Wohnung Nummer: {val.wohn}</h3>
                <h3>Erforderlich: {val.erforderlich}</h3>
                <h3>Halbarkeitsdatum: {val.hbd}</h3>
                <h3>Art der Hilfe: {val.hilftArt}</h3>
                <h3>Email: {val.email}</h3>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;

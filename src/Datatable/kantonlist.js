/*import React, { useState } from "react";
import Select from "react-select";
function SelectValue({}) {
  const options = [
    { label: "Basel-Stadt", value: "Basel-Stadt" },
    { label: "Zürih", value: "Zürih" },
    { label: "Bern", value: "Bern" },
    { label: "Uri", value: "Uri" },
    { label: "St.Gallen", value: "St.Gallen" },
    { label: "Vaud", value: "Vaud" },
    { label: "Cenevre", value: "Cenevre" },
    { label: "Argau", value: "Argau" },
    { label: "Chur", value: "Chur" },
    { label: "Schwyz", value: "Schwyz" },
    { label: "Luzern", value: "Luzern" },
    { label: "Obwalden", value: "Obwalden" },
    { label: "Nidwalden", value: "Nidwalden" },
    { label: "Glarus", value: "Glarus" },
    { label: "Zug", value: "Zug" },
    { label: "Fribourg", value: "Fribourg" },
    { label: "Solothurn", value: "Solothurn" },
    { label: "Basel-Landschaft", value: "Basel-Landschaft" },
    { label: "Schaffhausen", value: "Schaffhausen" },
    { label: "Appenzell Ausser", value: "Appenzell Ausser" },
    { label: "Appenzell Inner", value: "Appenzell Inner" },
    { label: "Graubünden", value: "Graubünden" },
    { label: "Thurgau", value: "Thurgau" },
    { label: "Ticino", value: "Ticino" },
    { label: "Valais", value: "Valais" },
    { label: "Jura", value: "Jura" },
    { label: "Neuchâtel", value: "Neuchâtel" },
  ];
  const [result, kantonvalue] = useState(options.label);
  const kantonHandler = (e) => {
    kantonvalue(e.label);
  };

  return (
    <div>
      <h3>Bulunduğunuz Kantonu Seçerek Arama yapabilirsiniz</h3>{" "}
      <Select options={options} onChange={kantonHandler} />
    </div>
  );
}
export default SelectValue;*/

import React from "react";
import ReactDOM from "react-dom";

export class SelectValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],

      first_name: "",
      last_name: "",
      email: "",
      city: "",
      address: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleSubmitCourse(event) {
    alert("Your selected value is: " + this.state.course);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleChangeCourse = (event) => {
    this.setState({ course: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  }

  componentDidMount() {
    const courses = require("../sql.json");
    this.setState({ courses: courses });
  }

  render() {
    const uniqueCouse = this.getUnique(this.state.courses, "kanton");

    const courses = this.state.courses;
    const course = this.state.course;

    const filterDropdown = courses.filter(function (result) {
      return result.kanton === course;
    });

    return (
      <div>
        <form onSubmit={this.handleSubmitCourse}>
          <br />
          <br />
          <label>
            <select
              value={this.state.course}
              onChange={this.handleChangeCourse}
            >
              {uniqueCouse.map((course) => (
                <option key={course.first_name} value={course.kanton}>
                  {course.kanton}
                </option>
              ))}
            </select>
          </label>

          <div>
            {filterDropdown.map((course) => (
              <div
                key={course.first_name}
                style={({ margin: "10px" }, { padding: "10px" })}
              >
                {course.first_name}
                {course.last_name}
                {course.email}
                {course.address}
                <br />
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<SelectValue />, document.querySelector("#root"));
export default SelectValue;

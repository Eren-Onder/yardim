import React, { useState, useEffect } from "react";
import Datatable from "./datatable.js";
import JSONDATA from "../sql.json";
import SelectValue from "./kantonlist";

import "../App.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

function DataSearch(props) {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  const [searchColumns, setSearchColumns] = useState([
    "kanton",
    "first_name",
    "last_name",
    "email",
  ]);
  useEffect(() => {
    fetch("../sql.json");
    setData(JSONDATA);
  }, []);

  function Search(rows) {
    return rows.filter(
      (row) =>
        row.kanton.toString().toLowerCase().indexOf(q) > -1 ||
        row.first_name.toString().toLowerCase().indexOf(q) > -1 ||
        row.last_name.toString().toLowerCase().indexOf(q) > -1 ||
        row.email.toString().toLowerCase().indexOf(q) > -1 ||
        row.address.toString().toLowerCase().indexOf(q) > -1 ||
        row.city.toString().toLowerCase().indexOf(q) > -1
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  return (
    <div>
      <div>
        <input
          id="data_listem"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div id="data_liste">
        <Datatable data={Search(data)} />
      </div>
    </div>
  );
}
export default DataSearch;

import React, { useState, useEffect } from "react";
import Datatable from "./index.js";
import JSONDATA from "../sql.json";
import SelectValue from "./kantonlist";

import "../App.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

function DataSearch() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  const [searchColumns, setSearchColumns] = useState([
    "kanton",
    "first_name",
    "last_name",
    "email",
  ]);

  useEffect(() => {
    setData(JSONDATA);
  }, []);

  function Search(rows) {
    const searchData = rows;

    return searchData.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
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
      <div>
        {" "}
        <SelectValue id="data_listem" />
      </div>
      <div id="data_liste">
        <Datatable data={Search(data)} />
      </div>
    </div>
  );
}
export default DataSearch;

import React from 'react';
import './App.css';
import { useState } from "react";
import FilterableProductTable from './components/FilterableProductTable'
import jsondata from './data.json'
import SearchBar from './components/SearchBar'

function App() {
  const [searchBar, setSearch] = useState("")

  const handleFilter = (query) => {
    setSearch(query);

    if (query === "") {
    }
  }
  return (
    <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;

import React from "react";
//import { useState } from "react";


const SearchBar = ({ searchBar, handleFilter}) => {
    return(
        <input value={searchBar} onChange={(e) => handleFilter(e.target.value)} />
    )
}

export default SearchBar;
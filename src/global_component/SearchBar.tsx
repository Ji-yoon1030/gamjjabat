import React from "react";
import searchbar from "../css/SearchBar.module.css";
import {IoIosSearch} from "react-icons/io";

function SearchBar() {
  return (
      <div className={searchbar.container}>
        <input type="text" className={searchbar.search_bar}/>
        <button className={searchbar.search_btn}><IoIosSearch></IoIosSearch></button>
      </div>
  );
}

export default SearchBar;
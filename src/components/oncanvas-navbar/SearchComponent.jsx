import React from "react";
import { Search } from "react-bootstrap-icons";

export default function SearchComponent() {
  return (
    <div className="search-input-group input-group custom-width-35">
        <input type="text" className="form-control" placeholder="Search GymBro" aria-label="Search GymBro" aria-describedby="gymbro-search" />
        <button className="btn btn-outline-secondary" type="button" id="search-gymbro"><Search color="#F3AF05" size={25} /></button>
    </div>
  );
}


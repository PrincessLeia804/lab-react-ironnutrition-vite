import React, { useState } from "react";
import { Input } from "antd";

function SearchBar({searchTerm, setSearchTerm}) {

  return (
    <Input type="text" onChange={(event) =>setSearchTerm(event.target.value)} value={searchTerm}/>
  )
}

export default SearchBar;

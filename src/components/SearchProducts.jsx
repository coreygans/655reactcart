
import React, { useState } from "react";

function SearchProducts({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  //As you type, it updates the search value to use for filtering
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <input
        placeholder="Search for food"
        type="text"
        className="product-search"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchProducts
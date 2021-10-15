import React, {useState} from "react";

function Search( {search, setSearch, setSortByLocation} ) {
    
  const [currentSearch, setCurrentSearch] = useState('')
  const [isChecked, setIsChecked] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(currentSearch)
  }

  function handleCheckbox() {
    setIsChecked((current) => !current)
    setSortByLocation((currentSort) => !currentSort)
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    
      <label htmlFor='checkbox' >Sort alphabetically by location </label>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
    
    </>
  );
}

export default Search;

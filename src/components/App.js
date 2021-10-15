import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('')
  const [sortByLocation, setSortByLocation] = useState(false);

  let itemsToDisplay = [...items]
  
  itemsToDisplay = itemsToDisplay.filter(item => item.description.toLowerCase().includes(search) || item.description.includes(search) || item.description.toUpperCase().includes(search))
  
  if(sortByLocation) {
    itemsToDisplay = itemsToDisplay.sort((a,b) => {
      return a.location.localeCompare(b.location)
    })
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => {
      setItems((currentItems) => data)
    })
  }, [])

  function handleDelete(id) {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(setItems((currentItems) => {
      return items.filter(item => item.id !== id)
    }))
  }

  return (
    <div className="app">
      <Header 
      search={search}
      setSearch={setSearch}
      setSortByLocation={setSortByLocation}
      />
      <ListingsContainer
      items={itemsToDisplay}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

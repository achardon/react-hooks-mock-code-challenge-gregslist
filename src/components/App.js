import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => {
      setItems((currentItems) => data)
    })
  }, [])

  console.log(items)

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
      <Header />
      <ListingsContainer
      items={items}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

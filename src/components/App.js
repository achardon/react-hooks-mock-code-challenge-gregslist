import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => {
      setItems(data)
    })
  }, [])

  console.log(items)

  return (
    <div className="app">
      <Header />
      <ListingsContainer
      items={items}
      />
    </div>
  );
}

export default App;

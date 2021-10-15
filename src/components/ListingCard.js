import React, {useState} from "react";

function ListingCard( {item, handleDelete} ) {
  
  const [like, setLike] = useState(false)

  function handleLike() {
    //console.log(like)
    setLike((currentLike) => !currentLike)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">

        {like ? (
          <button 
          onClick={handleLike}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={handleLike}
          className="emoji-button favorite">☆</button>
        )}
        
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button 
        onClick={() => handleDelete(item.id)}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;


// {
//   "id": 5,
//   "description": "wood",
//   "image": "./images/wood.jpg",
//   "location": "Greenpoint"
// },
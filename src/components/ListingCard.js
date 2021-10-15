import React, {useState} from "react";

function ListingCard( {item} ) {
  
  const [like, setLike] = useState(false)

  function handleLike() {
    console.log(like)
    setLike((currentLike) => !currentLike)
  }


  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">

        {/* <button 
        onClick={handleLike} */}
        
        {/* // >{like? '★' : '☆'}
        // </button> */}

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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

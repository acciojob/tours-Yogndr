import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <div>
        <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "See More"}
          </button>
        </p>
        <button id={`delete-btn-${id}`} className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
    </div>
  )
}

export default Tour
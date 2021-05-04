import React from "react";

const SearchCard = (props) => {
  return (
    <div className='card bg-light p-4'>
      <input type='date' className='form-control mb-3' placeholder='Choose Date' id='date' />
      <input id='from' className='form-control mb-3' type='text' placeholder='Form' />
      <input id='to' className='form-control mb-3' type='text' placeholder='To' />
      <button
        className='btn btn-block bg-orange'
        onClick={() => {
          if (document.getElementById("date").value && document.getElementById("from").value && document.getElementById("to").value) props.searchButtonHandeler(true);
          else props.searchButtonHandeler(false);
        }}>
        Search
      </button>
    </div>
  );
};

export default SearchCard;

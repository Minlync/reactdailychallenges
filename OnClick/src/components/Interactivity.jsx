import { useState } from 'react';
// Hook. Hooks are special functions that let your components use React features 
// (state is one of those features). 
// The useState Hook lets you declare a state variable.
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasLast = index > 0;

  // function handleNextClick() {
  //   if (hasNext) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0); 
  //   }
  // }

  // function handleLastClick() { 
  //   if (hasLast) {
  //     setIndex(index - 1);
  //   } else {
  //     setIndex(sculptureList.length - 1); 
  //   }
  // }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0); 
    }
  }

  function handleLastClick() { 
    if (hasLast) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1); 
    }
  }
  let sculpture = sculptureList[index];
  return (
    <>
      
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handleLastClick}>Last</button>
    </>





 );
}
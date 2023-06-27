import './TerrierExchange.css';
import React from 'react';

function TerrierExchange() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
    <p>terrier exchange</p>
    </>
  );
}

export default TerrierExchange;
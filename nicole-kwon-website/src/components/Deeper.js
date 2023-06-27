import './Deeper.css';
import React from 'react';

function Deeper() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
    <p>deeper</p>
    </>
  );
}

export default Deeper;
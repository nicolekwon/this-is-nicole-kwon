import './SnowFall.css';
import React from 'react';

function SnowFall() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
    <p>snowfall</p>
    </>
  );
}

export default SnowFall;
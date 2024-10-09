import React, { useEffect, useRef } from 'react';

function withLogger(WrappedComponent) {
  return function LoggerComponent(props) {
    const prevProps = useRef(props); 

    useEffect(() => {
      console.log("Current props:", props);
      console.log("Previous props:", prevProps.current);
      prevProps.current = props; 
    });

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;

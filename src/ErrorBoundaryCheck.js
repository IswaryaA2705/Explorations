import React from 'react';

function ProblematicComponent() {
  throw new Error("An intentional error occurred!");
  
  return <div>This won't be displayed</div>;
}

export default ProblematicComponent;

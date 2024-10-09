import React, { useRef } from 'react';
import TextInput from './ForwardRefex';

function ForwardExParent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Forwarding Refs Example</h1>
      <TextInput ref={inputRef} placeholder="Focus Button"/>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default ForwardExParent;

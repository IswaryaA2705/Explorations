import React, { forwardRef } from 'react';
import withLogger from './HOCEx';


const TextInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder={props.placeholder} />
    </div>
  );
});

export default withLogger(TextInput);

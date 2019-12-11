import React from "react";

const OperatorButton = (props) => {
  console.log('These are props', props);
  return (
    <button>
        {props.operator}
    </button>
  );
};
export default OperatorButton;        
import React from 'react';

const Action = props => {
  const handlePick = () => {
    alert("Handlepick");
  };
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I do?{" "}
      </button>
    </div>
  );
};
 export default Action;
import React from 'react';
const Form = ({
  onSubmit, 
  inputValue,
  onInputChange, 
  disabledAddButtonState
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={inputValue}
        onChange={onInputChange}
      />
      <button disabled={disabledAddButtonState}>Add</button>
	</form>
  );
};
export default Form;
import React, {Fragment} from 'react';
import Form from './Form';
import ItemsList from './ItemsList';
const ShoppingList = ({
  onSubmit,
  onInputChange,
  inputValue,
  disabledAddButtonState,
  onDeleteLastItem,
  disabledDeleteButtonState,
  items,
}) => {
  return (
    <Fragment>
      <h2>Shopping List</h2>
      <Form 
    	onSubmit={onSubmit}
        onInputChange={onInputChange}
        inputValue={inputValue}
    	disabledAddButtonState={disabledAddButtonState}
      />
      <button 
        onClick={onDeleteLastItem} 
        disabled={disabledDeleteButtonState}
	   >
   		Delete Last Item
      </button>

  	  <ItemsList items={items} />
	</Fragment>
  );
};
export default ShoppingList;
import React, {Fragment} from 'react';
const ItemsList = ({items}) => {
  return (
    <Fragment>
      <p className="items">Items</p>
        <ol className="item-list">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </Fragment>
  );
};
export default ItemsList;
import React from 'react';
import './ListItem.scss';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';

const ListItem = ({
  item,
  itemId,
  index,
  checked = false,
  onCheck,
  onDelete
}) => (
  <div className="ListItem">
    <div className="ListItem__draggable">
      :
    </div>
    <Checkbox className="ListItem__checkbox" checked={checked} index={index} itemId={itemId} onChange={onCheck} />
    <p className={`ListItem__text ${checked ? 'ListItem__text--checked' : ''}`}>
      {item}
    </p>
    <DeleteButton itemId={itemId} onDelete={onDelete} />
  </div>
);

export default ListItem;
import React from "react";
import ListItem from "./ListItem";

const UnapprovedList = ({ allItems, setUpdatedItem }) => {

  const unApprovedList = allItems.filter(item => !item.approved);

  return (
    <div>
      <h3>Un Approved List</h3>
      <ul>
        {unApprovedList.map((item, index) => (
          <li key={index}>
            <ListItem item={item} setUpdatedItem={setUpdatedItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnapprovedList;
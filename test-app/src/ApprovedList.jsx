import React from "react";
import ListItem from "./ListItem";

const ApprovedList = ({ allItems, setUpdatedItem }) => {

  const approvedList = allItems.filter(item => item.approved);

  return (
    <div>
      <h3>Approved List</h3>
      <ul>
        {approvedList.map((item, index) => (
          <li key={index}>
            <ListItem item={item} setUpdatedItem={setUpdatedItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedList;
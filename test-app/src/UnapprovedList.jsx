import React, {useEffect} from "react";
import ListItem from "./ListItem";

const UnapprovedList = ({ allItems, setUpdatedItem, updatedItem }) => {
  const filterApproved = () => {
    const filteredItems = allItems.filter((item) => {
      return item.approved == false;
    });
    return filteredItems;
  };
  let unApprovedList = filterApproved();
  useEffect(() => {
    filterApproved();
  }, [updatedItem]);
  return (
    <div>
      <h3>Un Approved List</h3>
      <ul>
        {unApprovedList.map((item, index) => {
          return (
            <li key={index}>
              <ListItem item={item} setUpdatedItem={setUpdatedItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UnapprovedList;

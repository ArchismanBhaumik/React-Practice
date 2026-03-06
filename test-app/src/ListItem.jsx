import React from "react";

const ListItem = ({ item, setUpdatedItem }) => {

  const setApproved = () => {
    const updated = { ...item, approved: !item.approved };
    setUpdatedItem(updated);
  };

  return (
    <>
      <span>{item.name}</span>
      <button onClick={setApproved}>
        {item.approved ? "Approved" : "Approve"}
      </button>
    </>
  );
};

export default ListItem;
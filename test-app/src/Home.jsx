import React, { useEffect, useState } from "react";
import ApprovedList from "./ApprovedList";
import UnapprovedList from "./UnapprovedList";
import names from "./const";

const Home = () => {
  const [allItems, setAllItems] = useState(names);
  const [updatedItem, setUpdatedItem] = useState(null);

  useEffect(() => {
    if (updatedItem) {
      setAllItems((prevItems) =>
        prevItems.map((item) =>
          item.name === updatedItem.name
            ? { ...item, approved: updatedItem.approved }
            : item
        )
      );
    }
  }, [updatedItem]);

  return (
    <div className="all-list">
      <ApprovedList allItems={allItems} setUpdatedItem={setUpdatedItem} />
      <UnapprovedList allItems={allItems} setUpdatedItem={setUpdatedItem} />
    </div>
  );
};

export default Home;
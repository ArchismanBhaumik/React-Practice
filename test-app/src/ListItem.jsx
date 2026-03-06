import React from 'react'
import { useState } from 'react';

const ListItem = ({item,setUpdatedItem}) => {
const [isApproved,setIsApproved] = useState(item);
const setApproved = () =>{
    const updated = { ...isApproved, approved: !isApproved.approved };

    setIsApproved(updated);
    setUpdatedItem(updated);

    console.log("item:", updated);
}
  return (
    <>
    <span>{item.name}</span>
    <button onClick={()=>setApproved()}>{item.approved?'Approved':'Approve'}</button>
    </>
  )
}

export default ListItem
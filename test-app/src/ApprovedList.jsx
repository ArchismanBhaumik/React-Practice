import React, { useEffect } from 'react'
import ListItem from './ListItem'

const ApprovedList = ({allItems,setUpdatedItem,updatedItem}) => {
const filterApproved = () =>{
    const filteredItems = allItems.filter((item)=>{
       return item.approved == true;
    })
    return filteredItems;
}
let approvedList = filterApproved();

useEffect(()=>{
    filterApproved();
},[updatedItem]);

  return (
    
    <div>
        <h3>Approved List</h3>
        <ul>
            {
            approvedList.map((item,index)=>{
                return(
                    <li key={index}><ListItem item={item} setUpdatedItem={setUpdatedItem}/></li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default ApprovedList
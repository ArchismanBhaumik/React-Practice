import React, { useEffect, useState } from 'react'
import ApprovedList from './ApprovedList'
import UnapprovedList from './UnapprovedList'
import names from './const'

const Home = () => {
const [allItems, setAllItems] = useState(names);
const [updatedItem,setUpdatedItem] = useState(null);

console.log("item updated:",updatedItem);

useEffect(()=>{
    if(updatedItem){
        const updatedList = [...allItems]
        updatedList.map((item,index)=>{
        if(item.name === updatedItem.name){
            item.approved = updatedItem.approved;
        }
    })
    setAllItems(updatedList);
    }

    console.log("updated list:",allItems);
},[updatedItem])

  return (
    <div className='all-list'>
        <ApprovedList allItems={allItems} setUpdatedItem={setUpdatedItem} updatedItem={updatedItem}/>
        <UnapprovedList allItems={allItems} setUpdatedItem={setUpdatedItem} updatedItem={updatedItem}/>
    </div>
  )
}

export default Home
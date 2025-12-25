
import { useState } from 'react';
import Item from './Item';

const FoodItems = ({items}) =>{
   let [activeItems,setActiveItems] = useState([]);
    return(
   
     <ul className="list-group">
        {items.map((item) => (
           <Item key= {item} foodItem={item}
            bought={activeItems.includes(item)}
           handleBuyButton = {() =>console.log(`${item} bought`)}/>
        ))}
      </ul>
   );
}

export default FoodItems;git
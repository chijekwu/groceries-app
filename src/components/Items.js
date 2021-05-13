/* Make an array of 3 objects using the above example and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
Make inputs so that new items can be added
Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
Stretch Add a button that says 'remove' and when clicked the value of isPurchased is toggled */
import Item from './Item'

const Items = ({ items, onDelete, onToggle }) =>{
  
  return (
      <>
        <h3>Purchased Items</h3>
            {items.map((item) => (<Item key={item.id} item = {item} 
            onDelete={onDelete}
            onToggle={onToggle}/>
            ))}
      </>
      )
}

export default Items


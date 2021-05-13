import { FaTimes} from 'react-icons/fa'
const Item = ( {item, onDelete, onToggle }) => {
  
  
    return (
      <div className="item" onDoubleClick={() => onToggle(item.id)}>
        <p>{item.item} {item.quantity}{item.units} <FaTimes style={{ color: 'red', 
        fontSize:'24px', cursor: 'pointer' }}
        onClick={() => onDelete(item.id)}/>
        </p>
      </div>
    )
  
}

export default Item

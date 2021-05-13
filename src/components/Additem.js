import { useState } from 'react'
import Button from './Button'
/*
{
  item: '',
  units: '',
  quantity: 0,
  isPurchased: false
}
*/ 


const Additem = ({ onAdd }) => {
  const [item, setItem] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [isPurchased, setIsPurchased] = useState(false)

  
  const onSubmit = (e) => {
    e.preventDefault()

    if (!item) {
      alert('Please add an item');
      return
    }
   
    if (!quantity){
        alert('Please specify a quantity');
        return;
    }
    
    onAdd({ item, unit, quantity, isPurchased })

    setItem('');
    setUnit('');
    setQuantity(0);
    setIsPurchased(false);
  }
  
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <h3>Shopping Cart</h3>
      <div className='form-control'>
        <label>Add Item</label>
        <input
          type='item'
          placeholder='Add Item'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>quantity</label>
        <input
          type='text'
          placeholder='quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className='form-control'>
      <label>Unit</label>
        <select
          selectedValue = 'lb'
          onChange={(e) => setUnit(e.target.value)}>
            <option value="Kg">Kg</option>
            <option value="LB">LB</option>
            <option value="Liter">Liter</option>
            </select>
      </div>
      <div className='form-control form-control-check'>
        <label>Purchased</label>
        <input
          type='checkbox'
          checked={isPurchased}
          value={isPurchased}
          onChange={(e) => setIsPurchased(e.currentTarget.checked)}
        />
      </div>
      <Button
          
        />
      <input type='submit' value='Save Item' className='btn btn-block' />
    </form>
  )
}

export default Additem
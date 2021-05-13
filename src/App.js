import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'



const App = () => {
  const [items, setItems] = useState (
    [{
      id: 1,
      item: 'potatoes',
      units: 'Kg',
      quantity: 2,
      isPurchased: true
    }, {
      id: 2,
      item: 'Milk',
      units: 'Liter',
      quantity: 1,
      isPurchased: true
        
    },
    {
      id: 3,
      item: 'Apple',
      units: 'LB',
      quantity: 5,
      isPurchased: true
    }])

    //delete  item from items list
    const deleteItem = (id) => {
      setItems(items.filter((item) => item.id !== id))
    }

    //check if an item is purchased using toggle
    const isPurchased = (id) => {
      setItems(
        items.map((item) => item.id === id ?
      {...item, isPurchased: !item.isPurchased } : item))
    }
  return (
   <div className='container'>
     <Header title={'Grocery Store'} />
     {items.length > 0 ? (<Items items={items} onDelete={deleteItem} onToggle={isPurchased}/>) : ('No Purchase made')}
     <Footer />
   </div>
  )
}

export default App

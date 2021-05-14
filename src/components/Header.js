import Additem from './AddItem'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        <Additem />
    }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <div className='header'>
      <Button color='limegreen' text='Add Item' onClick={onClick}></Button>
      <Button color='lightblue' text='Purchased Items' onClick={onClick}></Button>
      </div>
      
    </header>
  )
}

Header.defaultProps = {
  title: 'Grocery Cart',
}



export default Header

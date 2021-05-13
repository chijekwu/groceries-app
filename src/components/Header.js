import Additem from './Additem'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        <Additem />
    }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='limegreen' text='Add Item' onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Grocery Cart',
}



export default Header

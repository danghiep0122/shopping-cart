import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import { StoreItem } from './StoreItem'
import { Basket } from './Basket'
import items from './demo.json'
import { useState } from 'react'

function Menu() {
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      )
      setCartItems(newCartItems)
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems)
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems)
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCartItems)
    }
  }
  return (
    <CommonLayout>
      <h1>Menu Page</h1>
      <h1>Menu Page</h1>
      <div>
        <a href="#/cart">
          Cart {cartItems ? <button>{cartItems.length}</button> : ''}
        </a>
      </div>
      <div style={{ display: 'flex' }}>
        <StoreItem
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={items}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </CommonLayout>
  )
}

export default Menu

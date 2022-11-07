export function Basket({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = (itemsPrice * 0.14).toFixed(0)
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice
  return (
    <aside style={{ width: '30vw' }}>
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is Empty</div>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>
            <button onClick={() => onRemove(item)}>--</button>
            <button onClick={() => onAdd(item)}>+</button>
          </div>
          <div>
            {item.qty} x ${Number(item.price)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div>
            <div>Item Price</div>
            <div>{itemsPrice}</div>
          </div>
          <div>
            <div>Tax Price</div>
            <div>{taxPrice}</div>
          </div>
          <div>
            <div>Shipping Price</div>
            <div>{shippingPrice}</div>
          </div>
          <div>
            <div>Total Price</div>
            <div>{totalPrice}</div>
          </div>
        </>
      )}
    </aside>
  )
}

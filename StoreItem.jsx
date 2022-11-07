import { Product } from './Product'

export function StoreItem({ cartItems, onAdd, onRemove, products }) {
  return (
    <div style={{ width: '70vw' }}>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product
            item={cartItems.find((x) => x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </div>
  )
}

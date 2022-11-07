export function Product({ item, onAdd, onRemove, product }) {
  return (
    <li style={{ display: 'flex' }} className="cart-sugg-item">
      <div className="cart-sugg-picture-wrapper">
        <img
          style={{ objectFit: 'cover', height: '100px', width: 'auto' }}
          alt="product-suggestion-img"
          src={product.imgUrl}
        />
      </div>
      <div className="cart-sugg-description">
        <h3>{product.title}</h3>
        <div className="cart-sugg-price-and-btn-wrapper">
          <p>{product.price}</p>
          <div>
            {item ? (
              <div>
                <button onClick={() => onRemove(product)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => onAdd(product)}>+</button>
              </div>
            ) : (
              <button onClick={() => onAdd(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

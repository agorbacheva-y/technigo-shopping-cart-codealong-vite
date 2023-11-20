import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
  // fetch products from the cart store
  const products = useSelector((store) => store.cart.items);
 
  // calculate total from the sum of all products in the cart (array reducer)
  const totalPrice = useSelector((store) => (
    // reduce method keeps running count as iterate over time
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ));

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">
          🛒
        </span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

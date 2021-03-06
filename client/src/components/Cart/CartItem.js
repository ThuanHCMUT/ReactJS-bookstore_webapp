import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `đ${props.price.toLocaleString()}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <img className={classes.image} src={props.image} alt = "Cart item"/>
          <span className={classes.title}>{props.title}</span>
          <span className={classes.title} style={{fontWeight: '500'}}>By {props.author}</span>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

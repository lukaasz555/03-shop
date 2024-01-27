import { useCheckout } from './useCheckout';
import { CheckoutItem } from './CheckoutItem/CheckoutItem';
import './Checkout.css';

export const Checkout = () => {
	const { itemsInCart, isCardEmpty, totalValue, discount, resetCart } =
		useCheckout();

	return isCardEmpty ? (
		<div className='checkout__info'>
			<p>Your card is empty</p>
		</div>
	) : (
		<div>
			<div className='items__container'>
				{itemsInCart.map(({ product, quantity }) => (
					<CheckoutItem item={product} quantity={quantity} key={product.id} />
				))}
			</div>
			<div className='items__summary'>
				<div className='summary--detail'>
					<span>Total value: </span>
					<h3>${totalValue.toFixed(2)}</h3>
				</div>
				<div className='summary--detail'>
					<span>Discount: </span>
					<h4>${discount.toFixed(2)}</h4>
				</div>
				<div className='summary--action'>
					<button className='alt' onClick={resetCart}>
						reset cart
					</button>
					<button className='cta'>submit</button>
				</div>
			</div>
		</div>
	);
};

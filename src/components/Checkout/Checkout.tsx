import { useCheckout } from './useCheckout';
import { CheckoutItem } from './CheckoutItem/CheckoutItem';
import './Checkout.css';

export const Checkout = () => {
	const { itemsInCart, isCardEmpty } = useCheckout();

	return isCardEmpty ? (
		<div className='checkout__info'>
			<p>Your card is empty</p>
		</div>
	) : (
		<div className='items__container'>
			{itemsInCart.map(({ product, quantity }) => (
				<CheckoutItem item={product} quantity={quantity} key={product.id} />
			))}
		</div>
	);
};

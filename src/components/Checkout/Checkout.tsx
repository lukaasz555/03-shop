import './Checkout.css';
import { useCheckout } from './useCheckout';

export const Checkout = () => {
	const { itemsInCart } = useCheckout();
	return (
		<div>
			{itemsInCart.map(({ item, quantity }) => (
				<div key={item.id}>
					{item.title} - {quantity}
				</div>
			))}
		</div>
	);
};

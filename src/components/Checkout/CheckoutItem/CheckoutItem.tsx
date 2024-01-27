import { IProduct } from '../../../interfaces/IProduct';
import { useCheckoutItem } from './useCheckoutItem';
import './CheckoutItem.css';

interface CheckoutItemProps {
	item: IProduct;
	quantity: number;
}

export const CheckoutItem = ({ item, quantity }: CheckoutItemProps) => {
	const { addToCart, removeFromCart } = useCheckoutItem(item);

	return (
		<div key={item.id} className='item__container'>
			<div className='item__details'>
				<a href={`/product/${item.id}`}>{item.title}</a>
			</div>
			<div className='item__tools'>
				<button onClick={removeFromCart}>-</button>
				<p>{quantity}</p>
				<button onClick={addToCart}>+</button>
			</div>
		</div>
	);
};

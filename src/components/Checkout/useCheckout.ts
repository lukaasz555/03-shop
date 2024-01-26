import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IProduct } from '../../interfaces/IProduct';
import { getItemCartQuantity } from '../../utils/helpers/getItemCartQuantity';

interface CheckoutItem {
	item: IProduct;
	quantity: number;
}

export const useCheckout = () => {
	const cartItems = useSelector(
		(state: RootState) => state.cartReducer.cartItems
	);

	const itemsInCart: CheckoutItem[] = [];
	const itemsIds = [...new Set(cartItems.map((x) => x.id))];

	itemsIds.forEach((x) => {
		const item = cartItems.find(({ id }) => id === x) as IProduct;
		const quantity = getItemCartQuantity(item.id);
		itemsInCart.push({
			item,
			quantity,
		});
	});

	return { itemsInCart };
};

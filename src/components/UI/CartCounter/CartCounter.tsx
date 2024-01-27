import { useCartCounter } from './useCartCounter';
import cart from '../../../assets/cart.svg';
import './CartCounter.css';

export const CartCounter = () => {
	const { isCircleVisible, onCartClick, circleText } = useCartCounter();

	return (
		<button className='cartcounter__container' onClick={onCartClick}>
			<img src={cart} alt='Cart' style={{ width: 25, height: 25 }} />
			{isCircleVisible ? (
				<div className='cartcounter__circle'>
					<p>{circleText}</p>
				</div>
			) : null}
		</button>
	);
};

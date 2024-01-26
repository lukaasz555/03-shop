import { useState } from 'react';
import { CheckoutModalContext } from '../../context/CheckoutModalContext';
import { Loader } from '../UI/Loader/Loader';
import { Navbar } from '../UI/Navbar/Navbar';
import { Checkout } from '../Checkout/Checkout';
import './Layout.css';
import { Modal } from '../UI/Modal/Modal';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const [isCheckoutVisible, setCheckoutVisible] = useState(false);

	return (
		<CheckoutModalContext.Provider
			value={{ isCheckoutVisible, setCheckoutVisible }}>
			<div className='layout__wrapper'>
				<Navbar />
				<Loader />
				<Modal
					isVisible={isCheckoutVisible}
					setVisible={setCheckoutVisible}
					modalTitle='Your cart'>
					<Checkout />
				</Modal>
				{children}
			</div>
		</CheckoutModalContext.Provider>
	);
};

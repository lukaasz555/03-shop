import { SetStateAction, createContext, useContext } from 'react';

export type CheckoutModalContextType = {
	isCheckoutVisible: boolean;
	setCheckoutVisible: React.Dispatch<SetStateAction<boolean>>;
};

export const CheckoutModalContext = createContext<CheckoutModalContextType>({
	isCheckoutVisible: false,
	setCheckoutVisible: () => {},
});

export const useCheckoutModalContext = () => useContext(CheckoutModalContext);

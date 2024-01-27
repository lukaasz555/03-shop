import { Dispatch, SetStateAction } from 'react';

export const useModal = (
	isVisible: boolean,
	setVisible: Dispatch<SetStateAction<boolean>>
) => {
	const onClickOutside = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		if (target.classList.contains('modal__overlay')) {
			setVisible(false);
		}
	};

	const onClickClose = () => setVisible(false);

	return { onClickOutside, onClickClose, isVisible };
};

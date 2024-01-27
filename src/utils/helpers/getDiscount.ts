export const getDiscount = (
	value: number,
	discountValue = 20,
	discountCondition = 500
) => {
	const multiplier = Math.floor(value / discountCondition);
	return multiplier * discountValue;
};

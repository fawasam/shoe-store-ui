export const getDiscountedPricePercentage = (
  originalPrice: number,
  discountdPrice: number
) => {
  const discount = originalPrice - discountdPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return discountPercentage.toFixed(2);
};

export const getDiscountedPricePercentage = (a, b) => {
    const discount = a - b

    const discountPercentage = (discount / a) * 100

    return discountPercentage.toFixed()

}
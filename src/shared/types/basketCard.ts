type CardBasket = {
    image: string,
    title: string,
    price: string,
    count: number,
    handleDelete?: (title: string) => any,
}

export default CardBasket;
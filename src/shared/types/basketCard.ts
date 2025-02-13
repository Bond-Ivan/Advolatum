type CardBasket = {
    id: number,
    image: string,
    title: string,
    price: string,
    count: number,
    handleDelete?: (id: number, title: string) => any,
    isRemoving?: boolean; 
}

export default CardBasket;
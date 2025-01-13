import CardBasket from "../types/basketCard";
import Card from "../types/card";

const addCard = (item: Card): void => {
    const actualBasket: CardBasket[] = JSON.parse(localStorage.getItem('basket') || '[]');
    const existingItemIndex = actualBasket.findIndex((existingItem) => existingItem.title === item.title);

    if (existingItemIndex !== -1) {
        actualBasket[existingItemIndex].count += 1;
    } else {
        actualBasket.push({ ...item, count: 1 });
    }

    localStorage.setItem('basket', JSON.stringify(actualBasket));
};

export default addCard;


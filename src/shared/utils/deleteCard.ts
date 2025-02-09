import CardBasket from "../types/basketCard";

const deleteCard = (title: string) => {
    const actualBasket = JSON.parse(localStorage.getItem('basket') || '[]');
    const updatedBasket = actualBasket.filter((item: CardBasket) => item.title !== title);

    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    window.dispatchEvent(new Event('storage'));
};

export default deleteCard;
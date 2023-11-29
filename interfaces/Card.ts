export interface Card {
    id: number,
    description: string,
    isOpen?: boolean,
    pair: number,
    showButton?: boolean,
}

export interface CardProps {
    key: number;
    card: Card;
    onClickCard: (id: number) => void;
}

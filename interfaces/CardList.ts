import { Card } from "./Card";

export interface CardListProps {
    cards: Card[];
  }

export interface CardListPropsDos {
  cards: Card[];
  onCardClick: (id: number) => void;
}
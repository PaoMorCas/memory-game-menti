import Card from "./card";
import styles from "./cardList.module.css";
import { useEffect, useState } from "react";
import { CardListPropsDos } from "@/interfaces/CardList";


function CardList({cards, onCardClick}: CardListPropsDos){
    const list = cards;

    if(!cards.length){
        return(<div>hola</div>)
    }

    return(
        <ul className={styles.container}>
            {list?.map((item) => (
                <Card 
                card={item}
                onClickCard={onCardClick}/>
            ))}
        </ul>
    );
}

export default CardList;
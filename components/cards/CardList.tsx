import Card from "./card";
import styles from "./cardList.module.css";
import { CardListPropsDos } from "@/interfaces/CardList";


function CardList({cards, onCardClick}: CardListPropsDos){
    const list = cards;

    if(!cards.length){
        return(<div>Loading...</div>)
    }

    return(
        <ul className={styles.container}>
            {list?.map((item) => (
                <Card 
                key={item.id}
                card={item}
                onClickCard={onCardClick}/>
            ))}
        </ul>
    );
}

export default CardList;
import { useState } from "react";
import styles from "./Card.module.css";
import Button from "../ui/button";
import { CardProps} from  "../../interfaces/Card";


function Card({card, onClickCard}:CardProps){
    const { id, description, isOpen, showButton } = card;

    const [ isHidden, setIsHidden ] = useState(true);

    const onHandleMore = (e) => {
        e.preventDefault();
        console.log("este esta aqui");
    };

    return (
        <div
            onClick={() => onClickCard(id)}
        >
            <div className={`${styles["card"]} ${isOpen ? styles['flipped'] : ''}`}>
                <div className={`${styles["card-front"]}`}>
                    {!isOpen ? <img className={styles.cardImage} src="/images/riddlerQuestion.jpg" alt="question" /> : ''}
                    </div>
                <div className={`${styles["card-back"]}`}>{isOpen ? 
                    <div className={`${styles["card-info"]}`}>
                        <span>{description}</span>
                        {showButton &&
                            <Button link={`/definitions/${id}`}>
                                <span>Ver más</span>
                            </Button>
                        }
                    </div>
                    : ''}
                </div>
            </div>
        </div>
    )
}

export default Card;
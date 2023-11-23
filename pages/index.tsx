import CardList from '@/components/cards/CardList'
import { useEffect, useState } from "react";
// import Card from '@/components/cards/card'
import { getAllCards } from '../apis/demo-data';
import styles from "./Home.module.css";
import useAppContext from "../contexts/AppContext";
import { Card } from "../interfaces/Card"; 


export default function Home() {
  const { matchedPairs, setMatchedPairs, listCards, setListCards, totalFlips, setTotalFlips, totalSec, setTotalSec } = useAppContext();
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  
  const handleCardClick = (id: number) => {
    if(selectedCards.length < 2){
      setTotalFlips((prevTotalFlips: number) => prevTotalFlips + 1);

      const card = listCards.find((card) => card.id === id);
      if (card && !card.isOpen) {
        setSelectedCards([...selectedCards, card]);
        setListCards(
          listCards.map((c) =>
            c.id === id || matchedPairs.includes(c.id) || matchedPairs.includes(c.pair) ? { ...c, isOpen: true } : c
          )
        );    
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSec((prevTotalSec: number) => {
        return prevTotalSec + 1;
      });
    }, 1000);
   
    return () => {
      clearInterval(interval)
    };
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      let matchPairsList: Number[] = [...matchedPairs]
      if (selectedCards[0].pair === selectedCards[1].id) {
        matchPairsList = [...matchedPairs, selectedCards[0].id];
        setMatchedPairs([ ...matchPairsList ]);
      }
      setTimeout(() => {
        setListCards(
          listCards.map((card) =>
          matchPairsList.includes(card.id) || matchPairsList.includes(card.pair)
              ? { ...card, isOpen: true }
              :{ ...card, isOpen: false }
              // : card
          )
        );
        setSelectedCards([]);
      }, 3000);
    }
  }, [selectedCards]);


  return (
    <div className={`${styles["game-container"]}`}>
      <h1>Memory Game</h1>
      <div className={`${styles["controls"]}`}>
                <div className={`${styles["stats"]}`}>
                    <span className={`${styles["moves"]}`}>{totalFlips} moves </span>
                    <span className={`${styles["timer"]}`}>time: {totalSec} sec</span>
                </div>
      </div>
      <CardList cards={listCards} onCardClick={handleCardClick}/>
      <div className={`${styles["message"]}`}>
        {matchedPairs.length === listCards.length / 2
          ? '¡Has ganado!'
          : 'Encuentra las parejas'}
      </div>
    </div>
  )
}

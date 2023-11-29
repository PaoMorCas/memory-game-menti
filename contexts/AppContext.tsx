import React, { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { getAllCards } from '../apis/demo-data';
import { Card } from "../interfaces/Card"; 

interface AppContextProps{
    test: string,
    matchedPairs: Number[],
    setMatchedPairs: (pairs: Number[]) => void;
    listCards: Card[], 
    setListCards: (list: Card[]) => void,
    totalFlips: number,
    setTotalFlips: (n: any) => void,
    totalSec: number,
    setTotalSec: (n: any) => void,
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [test] = useState<string>('');
    const [matchedPairs, setPairs] = useState<Number[]>([]);
    const [listCards, setListCards] = useState<Card[]>([]);
    const [totalFlips, setTotalFlips] = useState<number>(0);
    const [totalSec, setTotalSec] =  useState<number>(0);

    useEffect(() => {
        getCards();
    }, []);

    const setMatchedPairs = (matchedPairs: Number[]) => {
        setPairs(matchedPairs)
    }

    const getCards = async():  Promise<Card[]> => {
        const cards = await getAllCards();
        
        const shuffleList = shuffle(cards);
    
        setListCards(shuffleList);
        return shuffleList;
    };

    const shuffle = (list: Card[]) => {
      const cloneList = list;
      cloneList.forEach((item,index) => {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          const original = cloneList[index];
          cloneList[index] = cloneList[randomIndex];
          cloneList[randomIndex] = original;
      });
      
      return cloneList;
    };

    const contextValue:  AppContextProps = {
        test,
        matchedPairs,
        setMatchedPairs,
        listCards, 
        setListCards,
        totalFlips,
        setTotalFlips,
        totalSec,
        setTotalSec,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error('Error with the AppContext!');
    }
    return context;
}

export default useAppContext;
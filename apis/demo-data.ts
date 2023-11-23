import { Card } from "../interfaces/Card";
import { Definition } from "../interfaces/Definition";

const DEMO_DATA = [
    {
        id: 1,
        description: "hello",
        pair:2,
        isOpen: false,
    },
    {
        id: 2,
        description: "hola",
        isOpen: false,
        pair:1,
        showButton:true,
    },
    {
        id: 3,
        description: "Have a nice day",
        pair:4,
        isOpen: false,
    },
    {
        id: 4,
        description: "Ten un excelente día",
        isOpen: false,
        pair:3,
        showButton:true,
    },
    {
        id: 5,
        description: "Good to see you",
        pair:6,
        isOpen: false,
    },
    {
        id: 6,
        description: "Es bueno verte",
        isOpen: false,
        pair:5,
        showButton:true,
    },
    {
        id: 7,
        description: "Amazing day",
        pair:8,
        isOpen: false,
    },
    {
        id: 8,
        description: "Grandioso día",
        isOpen: false,
        pair:7,
        showButton:true,
    }
];

const DEMO_DATA_DEFINITIONS = [
    {
        id: 2,
        title: "hello",
        description: "lalalalalallala",
        image: '',
    },
    {
        id: 4,
        title: "hello",
        description: "lalalalalallala",
        image: '',
    },
    {
        id: 6,
        title: "hello",
        description: "lalalalalallala",
        image: '',
    },
    {
        id: 8,
        title: "hello",
        description: "lalalalalallala",
        image: '',
    },
];

export function getAllCards(){
    return DEMO_DATA;
}

export function getCardInfo(id: number): Card{
    return DEMO_DATA.find((card) => card.id === id)
} 

export function getDefinitionCard(id: number): Definition{
    return DEMO_DATA_DEFINITIONS.find(card => card.id === id);
}

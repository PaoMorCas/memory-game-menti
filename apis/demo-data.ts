import { Card } from "../interfaces/Card";
import { Definition } from "../interfaces/Definition";

const DEFAULT_CARD : Card =  {
    id: -1,
    description: "THERE IS NO CARD",
    pair:-1,
    isOpen: false,
};

const DEFAULT_DEFINITION : Definition =  {
    id: -1,
    title: "THERE IS NO CARD",
    description: "",
    image: '/images/400Error.png',
};

const DEMO_DATA : Card[] = [
    {
        id: 1,
        description: "SEMVER",
        pair:2,
        isOpen: false,
    },
    {
        id: 2,
        description: "Es una convención para la numeración de versiones de software",
        isOpen: false,
        pair:1,
        showButton:true,
    },
    {
        id: 3,
        description: "PWA(Aplicacición web progresiva)",
        pair:4,
        isOpen: false,
    },
    {
        id: 4,
        description: "Es una combinación entre una página web y una aplicación móvil",
        isOpen: false,
        pair:3,
        showButton:true,
    },
    {
        id: 5,
        description: "Closure",
        pair:6,
        isOpen: false,
    },
    {
        id: 6,
        description: "Es una función que accede a un contexto cerrado, empaquetando todas las propiedades cada vez que se llame a la función.",
        isOpen: false,
        pair:5,
        showButton:true,
    },
    {
        id: 7,
        description: "Server-side NextJS",
        pair:8,
        isOpen: false,
    },
    {
        id: 8,
        description: "Es donde se manejan datos, se realizan cálculos y se generan las páginas web antes de enviarlas al cliente.",
        isOpen: false,
        pair:7,
        showButton:true,
    }
];

const DEMO_DATA_DEFINITIONS = [
    {
        id: 2,
        title: "SEMVER  ",
        description: "Es una convención para la numeración de versiones de software, para que podamos entender rápidamente qué cambios se han realizado. " +
        "\n Se compone de tres números separados por puntos: X.Y.Z." +
        "\n El primer número (X) es la versión principal y cambia cuando hay cambios grandes que podrían afectar cómo funciona el software." +
        "\n El segundo número (Y) es la versión secundaria y cambia cuando se agregan nuevas funcionalidades de una manera compatible con versiones anteriores." +
        "\n El tercer número (Z) es la versión de parche, que cambia cuando se hacen correcciones o arreglos pequeños que no deberían alterar cómo se usa el software.",
        image: '/images/semver.png',
    },
    {
        id: 4,
        title: "PWA(Aplicacición web progresiva)",
        description: "Es una combinación entre una página web y una aplicación móvil, con el fin de ofrecer una experiencia similiar a un aplicación nativa, ejecutada en el navegador. Algunas caraterísticas son:" +
        "\n Trabajo sin conexión: Pueden funcionar incluso si no hay conexión a internet" +
        "\n Capacidad de instalación: Se puede instalar una PWA, lo que permite acceder a esta como si fuera una app nativa." +
        "\n Respuesta rápida: Ofrecen tiempos de carga rápidos y una navegación fluida." +
        "\n Notificaciones: Pueden enviar notificaciones push, como las aplicaciones móviles.",
        // "\n Los Service Workers son una tecnología fundamental para las Progressive Web Apps (PWAs) y otras aplicaciones web avanzadas. Son scripts en segundo plano que trabajan independientemente de la página web, lo que les permite manejar tareas como notificaciones push, trabajar sin conexión a internet o manejar estrategias de caché para mejorar la velocidad de carga.",
        image: '/images/pwa.png',
    },
    {
        id: 6,
        title: "Closures",
        description: "Son funciones que acceden a un contexto(scope) cerrado, empaquetando todas las propiedades cada vez que se llame a la función." +
        "\n Básicamente, un closure permite que una función acceda a variables que no están en su ámbito actual, sino que estaban disponibles en el ámbito donde se definió la función. Esto es útil cuando una función es declarada dentro de otra función y necesita acceder a las variables de la función exterior incluso después de que la función exterior haya finalizado su ejecución.",
        image: '/images/closure.png',
    },
    {
        id: 8,
        title: "Server-side NextJS",
        description: "Es donde se manejan datos, se realizan cálculos y se generan las páginas web antes de enviarlas al cliente." +
        "\n En NextJS podemos manejar la carga de datos en el lado del servidor con:" +
        "\n getServerSideProps(): Es un método que permite cargar datos en cada solicitud al servidor. Es decir que al hacer reload se va a llamar a esta función" +
        "\n getStaticProps(): Cuando se tenga una pagina que no requiere cambio continúo de data, este permite la generación estática de páginas durante el tiempo de compilación. " +
        "\n  getStaticPaths(): Usado en combinación con getStaticProps(), permite generar páginas dinámicas estáticas con fallback.",
        image: '/images/serverSide.png',
    },
];

export function getAllCards(){
    return DEMO_DATA;
}

export function getCardInfo(id: number): Card{
    return DEMO_DATA.find((card) => card.id === id) || DEFAULT_CARD;

} 

export function getDefinitionCard(id: number): Definition{
    return DEMO_DATA_DEFINITIONS.find(card => card.id === id) || DEFAULT_DEFINITION;
}

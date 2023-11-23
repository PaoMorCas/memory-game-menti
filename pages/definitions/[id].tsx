import { getDefinitionCard } from "@/apis/demo-data";
import { NextRouter, Router, useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Definition, DetailConceptProps } from "../../interfaces/Definition";
import styles from './DetailConcept.module.css';

interface RouterQuery{
    id: string | undefined;
}

const DetailConcept: React.FC<DetailConceptProps> = (props) => {
    console.log("HP data client",props)
    // const [definition, setDefinition] = useState<Definition | null>(null);
    const { data: definition }  = props;
    // const router: NextRouter = useRouter();
    // const { id } = router.query;

    // const fetchCardInfo = async(conceptId: number) => {
    //   const card: Definition = await getDefinitionCard(conceptId);
      
    //   setDefinition(card);
    // };
    
    // useEffect(() => {
    //     if(typeof id === 'string'){
    //         const conceptId = parseInt(id);
    //         fetchCardInfo(conceptId);
    //         console.log("cx",{conceptId,definition})
    //     }
    // },[id]);

    // const { description } = card || {};

    // useEffect(() => {
    //     setDefinition(data);
    // }, []);

    return (
        <div className={`${styles["detail"]}`}>
            <div className={`${styles["container"]}`}>
                {(definition !== null) &&
                    (<>
                    <h1>{definition.title}</h1>
                    <p>{definition.description}</p>
                    <img src={definition.image} alt={definition.title} />
                    </>)
                }
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params }:any) => {
    const { id } = params;
    let data = {};

    const fetchCardInfo = async(conceptId: number) => {
      const card: Definition = await getDefinitionCard(conceptId);
      data = card;
      console.log("HP data server",data)
      
    }

    if(typeof id === 'string'){
      const conceptId = parseInt(id);
      await fetchCardInfo(conceptId);
      
      
    }

    return {
        props: {
            data,
        }
    };
};

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '2' } },
            { params: { id: '4' } },
            { params: { id: '6' } },
            { params: { id: '8' } },
        ],
        fallback: false,
    };
};

export default DetailConcept;
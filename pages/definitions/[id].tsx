import { getDefinitionCard } from "@/apis/demo-data";
import React from "react";
import { Definition, DetailConceptProps } from "../../interfaces/Definition";
import styles from './DetailConcept.module.css';
import Image from 'next/image';

const DetailConcept: React.FC<DetailConceptProps> = (props) => {
    const { data: definition }  = props;
    const description =  definition?.description.split('\n');
    console.log("HP des", description)
 
    return (
        <div className={`${styles["detail"]}`}>
            <div className={`${styles["container"]}`}>
                {(definition !== null) &&
                    (<>
                    <h1>{definition.title}</h1>
                    {description?.map((line, index) => {
                       return <p key={index}>{line}</p>       
                    })}
                    <div className={`${styles["container-image"]}`}>
                        <img  className={`${styles["detail-image"]}`} src={definition.image} alt={definition.title} />
                    </div>
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
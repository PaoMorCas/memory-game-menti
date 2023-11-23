export interface Definition{
    id: number,
    title: string,
    description: string,
    image: string,
}

export interface DetailConceptProps{
    data: Definition | null,
}
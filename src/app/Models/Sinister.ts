
export class Sinister {
    id_sin!: number;
    date_sin!: Date;
    amount!: number;
    statut_sin!: Statut_Sin; // Supposons que Statut_Sin soit une énumération définie ailleurs
    paper!: string;
    typeSin!: TypeSin; // Supposons que TypeSin soit une énumération définie ailleurs

}
export enum TypeSin {
    INCENDIE, ACCIDENT, VOL, DEGATS, TEMPETE, BRIS_DE_GLACE, RESPONSABILITE_CIVILE, DECES
}

export enum Statut_Sin {
    In_Progress,rejected,settled
}

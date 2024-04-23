

export class Insurance {
    id_ass!: number;
    name!: string;
    description!: string;
    typeAss!: TypeAss;
    ceiling!: number;
    event_ass!: string;
    exclusions!: string;
    conditions!: string;
}
export enum TypeAss {
    VOITURE, BATEAU, HABITATION, SANTE, VOYAGE, RESPONSABILITE_CIVILE, ENTREPRISE, INVALIDITE, VIE, CREDIT, SCOLARITE
}



export class Devis {
    idDev!: number;
    prime!: number;
    franchise!: number;
    statPol!: StatPol; 
    startinsurance!: Date;
    endinsurance!: Date;
    archived!: boolean;

    // Voiture
    marque!: string;
    puissance!: number;
    miseencirc!: Date;
    utilisation!: string; // Usage prv ou utilitaire
    bonus_malus!: number;
    valneuf!: number;
    valvenal!: number;

    // Habitation
    habitation!: string;
    nbrchambre!: number;
    superficiech!: number;
    superficietot!: number;
    capitalmob!: number;
    capitalphoto!: number;
    capitaldamage!: number;

    // Bateau
    nom_bat!: string;
    type_bat!: string;
    numconge!: number;
    immatriculation!: number;
    port_dattache!: string;
    construct_bat!: Date;
    val_bat!: number;
    nbr_chevaux!: number;
    longueur!: number;
    nbr_places!: number;

    // Scolarité
    dn_bene!: Date;
    dn_assure!: Date;
    duree!: string;
    periodicite!: string;

    // Voyage
    pays!: string;
    duree_voy!: string;
    nbr_totperso!: number;
    billet!: number;
}


export enum StatPol{
    ACTIF,
    EN_ATTENTE,
    EN_RETARDISSEMENT,
    REMBOURSE,
    ANNULE,
    NON_APPROUVE,
    APPROUVE
} 
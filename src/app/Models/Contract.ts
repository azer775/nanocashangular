import { Project } from "./Project";

export class Contract {
    idContratct!: number;
    nompartner!: string;
    duartion!: number;
    amount!: number;
    description!: string;
    typeContract!: TypeContract;
    projects!: Project;
    date!: Date;
}




export enum TypeContract {
    sponsoring = 'sponsoring',
    partenariat = 'partenariat',
    // Add more enum values as needed
}

export class User {
    id !: number;
    username!: string;
    email!: string;
    // Add more properties as needed
}


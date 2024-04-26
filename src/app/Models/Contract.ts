import { Project } from "./Project";

export class Contract {
    idContratct!: number;
    nompartner!: string;
    duartion!: number;
    Amount!: number;
    description!: string;
    typeContract!: TypeContract;
    projects!: Project;
    date!: Date;
}





export enum TypeContract {
    FixedTerm = 'FixedTerm',
    Permanent = 'Permanent',
    Freelance = 'Freelance',
    // Add more enum values as needed
}

export class User {
    id !: number;
    username!: string;
    email!: string;
    // Add more properties as needed
}


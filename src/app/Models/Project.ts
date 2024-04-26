import { Contract } from "./Contract";

export class Project {
    idProject!: number;
    ProjName!: string;
    Status!: boolean;
    description!: string;
    CA!: number;
    CV!: number;
    CF!: number;
    AM!: number;
    Contracts!: Contract;
    date!: Date;
}
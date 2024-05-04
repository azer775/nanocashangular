import { Contract } from "./Contract";

export class Project {
    idProject!: number;
    projName!: string;
    status!: boolean;
    description!: string;
    CA!: number;
    CV!: number;
    CF!: number;
    AM!: number;
    Contracts!: Contract;
    date!: Date;
}
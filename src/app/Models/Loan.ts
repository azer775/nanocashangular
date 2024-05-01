import { Pack } from "./Pack";
import { User } from "./Userazer";

export class Loan {
    id!: number;
    amount!: number;
    duration!: number;
    start!: Date; // Using Date type for dates
    cin!: string;
    possession!: string;
    diploma!: string;
    work!: string;
    bankstat!: string;
    state!: string;
    pack!: Pack;
    idp!: number;
    user!: User;
    [key: string]: any;
}
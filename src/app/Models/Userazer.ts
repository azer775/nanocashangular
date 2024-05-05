export class User{
  public Id!: number;
  public firstname!: string;
  public lastname!: string;
  public dateOfBirth!: Date;
  public email!: string;
  public pwd!: string;
  public adress!: string;
  public region!: string;
  /*public   role!: role;
  public status!: status;*/
  public  work!: string;

}
export enum status {
    Actif = 'Actif',
    Inactif = 'Inactif',
    Bloque = 'Bloque'
  }
  export enum role{
    Admin= 'Admin',
    Client= 'Client',
    Agent= 'Agent'
  }
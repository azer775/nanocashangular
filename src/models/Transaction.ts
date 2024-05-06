export class Transaction{
  public id_trans!: number;
  public methode!: methode;
  public dateTrans!: Date;
  public rib_S! : number;
  public rib_R! : number;
  public montant! : number;
  public statusTr!: statusTr;
  public refunded?: boolean;
}
export enum statusTr {
  APPROUVE = 'APPROUVE',
  REJETE = 'REJETE',
  EN_ATTENTE = 'EN_ATTENTE',
  EFFECTUE = 'EFFECTUE'
}
export enum methode {
    retrait = '0',
    carte = '1',
    agence = '2'
  }
import { Injectable } from '@angular/core';
import { Project } from 'src/app/Models/Project';


@Injectable({
  providedIn: 'root'
})
export class CompteResultatService {
  constructor() { }

  margeBrute(coutDesMarchandise: number, ventesDesMarchandise: number): number {
    return coutDesMarchandise - ventesDesMarchandise;
  }

  resulatBrutDexploitation(achatDesMarchandise: number, project: Project): number {
    const impot = project.CA * 0.2;
    return project.CA - achatDesMarchandise - project.CV - impot;
  }

  excédentBrutdExploitationsurchargesFinancières(chargeFinanciere: number, rbex: number): number {
    return rbex / chargeFinanciere;
  }

  margeBruteEnCA(project: Project,coutDesMarchandise: number, ventesDesMarchandise: number): number {
    const mbr = this.margeBrute(coutDesMarchandise, ventesDesMarchandise);
    return mbr / project.CA;
  }
}


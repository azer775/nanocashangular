import { Injectable } from '@angular/core';
import { Project } from 'src/app/Models/Project';
import { CompteResultatService } from '../CompteResultat/CompteResultat.service';


@Injectable({
  providedIn: 'root'
})
export class TresoriereService {

  constructor(private compteResultatService: CompteResultatService) { }

  conversionEnTresorerie(project: Project, achatDesMarchandises: number): number {
    const RBex = this.compteResultatService.resulatBrutDexploitation(achatDesMarchandises, project);
    return RBex / project.CA;
  }

  fluxTresorerieOperationnelNet(project: Project): number {
    return project.CA - (project.CV + project.CF);
  }

  fluxTresorerieExploitationNet(project: Project): number {
    return this.fluxTresorerieOperationnelNet(project) - project.AM;
  }

  lesFluxDinvestissement(recetteDinvestissement: number, depenseDinvestissement: number): number {
    return recetteDinvestissement - depenseDinvestissement;
  }
}

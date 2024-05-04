import { Injectable } from '@angular/core';
import { Project } from 'src/app/Models/Project';


@Injectable({
  providedIn: 'root'
})
export class BilanProvissionnelService {

  constructor() { }

  beneficeAvantAmortissementEtImpots(project: Project): number {
    let AMETIMPOT: number;
    let tc = this.totaldesCharges(project);
    AMETIMPOT = tc - project.AM;
    return AMETIMPOT;
  }

  beneficeNet(project: Project): number {
    let BNet: number;
    let impot = project.CA * 0.2;
    let AMTIMPOT = this.beneficeAvantAmortissementEtImpots(project);
    BNet = AMTIMPOT - impot;
    return BNet;
  }

  totaldesCharges(project: Project): number {
    return project.CF + project.CV;
  }
}

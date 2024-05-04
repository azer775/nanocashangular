/*import { Component } from '@angular/core';
import { Project } from 'src/app/Models/Project';
import { BilanProvissionnelService } from 'src/app/Services/BilanProvissionnel/BilanProvissionnel.service';
import { CompteResultatService } from 'src/app/Services/CompteResultat/CompteResultat.service';
import { TresoriereService } from 'src/app/Services/Tresorie/Tresorie.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-etude-de-project',
  templateUrl: './etude-de-project.component.html',
  styleUrls: ['./etude-de-project.component.css']
})
export class EtudeDeProjectComponent {
  constructor(
    private bilanProvissionnelService: BilanProvissionnelService,
    private tresoriereService: TresoriereService,
    private compteResultatService: CompteResultatService,
  ) { }

  generateExcel(): void {
    // Perform calculations using services
    const beneficeAvantAmortissementEtImpots = this.bilanProvissionnelService.beneficeAvantAmortissementEtImpots;
    const beneficeNet = this.bilanProvissionnelService.beneficeNet;
    const totaldesCharges =this.bilanProvissionnelService.totaldesCharges;



    const tresoriereData = this.tresoriereService.calculateTresoriereData();

    // Combine data if needed

    // Prepare data for Excel
    const excelData = [...beneficeAvantAmortissementEtImpots, ...tresoriereData];

    // Convert data to Excel worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excelData);

    // Create Excel workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save Excel file
    XLSX.writeFile(wb, 'etude_de_project.xlsx');
  }
}*/


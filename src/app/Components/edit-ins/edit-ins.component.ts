import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Insurance, TypeAss } from 'src/app/Models/Insurance';
import { InsuranceService } from 'src/app/Services/insurance.service';

@Component({
  selector: 'app-edit-ins',
  templateUrl: './edit-ins.component.html',
  styleUrls: ['./edit-ins.component.css']
})
export class EditInsComponent implements OnInit{
  insForm!: FormGroup;
  ins: Insurance = {
    name: '',
    description: '',
    typeAss: TypeAss.CREDIT,
    conditions: '',
    event_ass: '',
    exclusions: '',
    id_ass: 0,
    ceiling: 0
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private insService: InsuranceService
  ) { }

  ngOnInit(): void {
    // Récupérer l'identifiant de l'offre depuis l'URL
    const offerId = this.route.snapshot.params['id'];

    // Récupérer les informations de l'offre à partir du service
    this.insService.getInsbyId(offerId).subscribe(
      response => {
        this.ins = response; // Stockez les informations récupérées dans la propriété offer
        this.initializeForm(); // Initialisez le formulaire avec les informations de l'offre
      },
      error => {
        console.error('ERROR :', error);
      }
    );
  }

  initializeForm(): void {
    // Initialisez le formulaire avec les informations de l'offre
      this.insForm = this.fb.group({
      name: [this.ins.name || '', Validators.required],
      description: [this.ins.description || '', Validators.required],
      TypeAss: [this.ins.typeAss || '', Validators.required],
      conditions: [this.ins.conditions || '', Validators.required],
      exclusions: [this.ins.exclusions || '', Validators.required],
      ceiling: [this.ins.ceiling || '', Validators.required],
      Evenements : [this.ins.event_ass || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.insForm.valid) {
      const insData = this.insForm.value;
      insData.id_ass = this.ins.id_ass; // Assurez-vous d'inclure l'identifiant de l'offre dans les données à mettre à jour

      this.insService.modifyIns(insData).subscribe(
        response => {
          console.log('Insurance updated with success:', response);
          this.router.navigate(['/viewOffers']); // Redirigez vers la liste des offres après la mise à jour
        },
        error => {
          console.error('ERROR :', error);
        }
      );
    } else {
      console.error('FormInvalid');
    }
  }

}

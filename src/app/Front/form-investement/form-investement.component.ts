import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Investisement } from '../../Models/Investisement';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/Models/Project'; // Import Project model
import { InvestisementService } from 'src/app/Services/investementservice/investementservice';
import { ProjectService } from 'src/app/Services/projectservice/projectservice';

@Component({
  selector: 'app-form-investment',
  templateUrl: './form-investement.component.html',
  styleUrls: ['./form-investement.component.css']
})
export class ForminvestementComponent implements OnInit {
  investmentForm: FormGroup;
  editInvestment: Investisement | undefined;
  isEditing: boolean = false;
  projet: Project[] = []; // Array to hold projects

  constructor(private formBuilder: FormBuilder, private investmentService: InvestisementService, private projectService : ProjectService ,
              private router: Router, private route: ActivatedRoute) {
    this.investmentForm = formBuilder.group({
      amount: ['', Validators.required],
      dateInvest: [''],
      projet: ['', Validators.required] // Added project field
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['Data']) {
        this.isEditing = true;
        this.investmentService.getbyid(params['Data']).subscribe((investment: Investisement) => {
          this.editInvestment = investment;
          this.investmentForm.patchValue(this.editInvestment);
        });
      } else {
        // Initialize form fields for adding a new investment
      }
    });

    // Fetch projects
    this.fetchProjects();
  }

  addInvestment(): void {
    if (this.investmentForm.valid) {
      if (this.isEditing) {
        const editedInvestment: Investisement = this.investmentForm.value as Investisement;
        editedInvestment.idinvesttisment = this.editInvestment!.idinvesttisment;
        this.investmentService.editInvestment(editedInvestment).subscribe(() => {
          this.router.navigateByUrl('/investisement');
        });
      } else {
        const newInvestment: Investisement = this.investmentForm.value as Investisement;
        this.investmentService.addInvestisement(newInvestment).subscribe(() => {
          this.router.navigateByUrl('/investisement');
        });
      }
    }
  }

  cancel(): void {
    this.investmentForm.reset();
  }

  fetchProjects(): void {
    // Assuming you have a method in your service to fetch projects
    this.projectService.findAllProjects().subscribe((projects: Project[]) => {
      this.projet = projects;
    });
  }
}

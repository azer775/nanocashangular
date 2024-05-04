import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/Models/Project';
import { ProjectService } from 'src/app/Services/projectservice/projectservice';


@Component({
  selector: 'app-formproject',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
  projectsForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) {
    this.projectsForm = this.formBuilder.group({
      idProject :['', Validators.required],
      ProjName: ['', Validators.required],
      Status: ['', Validators.required],
      description: [''],
      CV: ['', Validators.required],
      CF: ['', Validators.required],
      AM: ['', Validators.required],
      CA: ['', Validators.required], // Assuming typeproject is required, adjust validators as needed
      idContratct: ['', Validators.required],
      date: [''] // You can include this if you want to capture the date
    });

    
   
    
  }

  ngOnInit(): void {
  }
  addproject(): void {
    if (this.projectsForm.valid) {
      const newproject: Project = this.projectsForm.value as Project;
      this.projectService.addProject(newproject).subscribe(() => {
        // Handle success, e.g., show a success message
        console.log('project added successfully!');
        // Navigate to projects page
        this.router.navigateByUrl('/admin/projects');
      }, error => {
        // Handle error, e.g., show an error message
        console.error('Error adding project:', error);
      });
    }
  }
}

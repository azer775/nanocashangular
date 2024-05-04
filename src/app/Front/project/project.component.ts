import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/projectservice/projectservice';

import { Project } from '../../Models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.findAllProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      console.log(projects)
    });
  
  }
  exportExcel(project: Project): void {
    if (confirm("Are you sure you want to export?")) {
      this.projectService.exportExcel(project.idProject).subscribe(() => {
        // Here you can handle success, e.g., show a success message
        console.log('Excel exported successfully!');
      }, error => {
        // Here you can handle error, e.g., show an error message
        console.error('Error exporting Excel:', error);
      });
    }
  }
}

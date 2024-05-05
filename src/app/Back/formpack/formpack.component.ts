import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackService } from '../../Services/pack.service';
import { Pack } from '../../Models/Pack';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-formpack',
  templateUrl: './formpack.component.html',
  styleUrls: ['./formpack.component.css']
})
export class FormpackComponent implements OnInit {
            packForm: FormGroup;
            updatedpack!: Pack;
            isEditing: boolean = false;
            constructor(private formBuilder: FormBuilder, private packService: PackService,private router: Router,private route: ActivatedRoute) {
              this.packForm =formBuilder.group({
                id: [''], // You may or may not include this depending on your use case
                bankstat: [false],
                cin: [false],
                diploma: [false],
                possession: [false],
                interest: ['', Validators.required],
                max: ['', Validators.required],
                min: ['', Validators.required],
                work: [false],
                target: ['', Validators.required],
                description: [''],
                name: ['', Validators.required],
                img:['', Validators.required]
              });
            }
            onFileChange(event: any, field: string) {
              const files = event.target.files;
              if (files.length > 0) {
                this.packForm.get(field)?.setValue(files);
              }
            }

            ngOnInit(): void {
              this.route.params.subscribe(params => {
                if (params['Data']) {
                  this.isEditing = true;
                 // this.updatedpack$ = this.packService.getbyid(params['id']);
                  this.packService.getbyid(params['Data']).subscribe((pack: Pack) => {
                    // Handle the response here, for example, you can assign the pack to a property
                    this.updatedpack = pack;
                   this.packForm.patchValue(this.updatedpack);
                  });
                } else {
                  // Initialize form fields for adding a new pack
                }
              });
              throw new Error('Method not implemented.');
            }
            addPack() : void {
              if (this.packForm.valid) {
                if(this.isEditing){
                  const packup:Pack =this.packForm.value as Pack;
                  packup.id=this.updatedpack.id;
                  this.packService.editPack(packup).subscribe(()=>{});
                  
                }else
                 { const pack : Pack = this.packForm.value as Pack;
                  this.packService.addPack(pack).subscribe(()=>{
                    
                  })}
                  this.router.navigateByUrl('/admin/packs');    
            }
            
          }
          onSubmit() {
    
            const formData = new FormData();
            const packData = this.packForm.value;
            //loanData.idp=this.selectedPack.id;
            Object.keys(packData).forEach(key => {
              if (packData[key] instanceof FileList) {
                for (let i = 0; i < packData[key].length; i++) {
                  formData.append(key, packData[key][i]);
                }
              } else {
                formData.append(key, packData[key]);
              }
            });
            if(this.isEditing){
              packData.id=this.updatedpack.id;
              this.packService.updatewithFiles(formData).subscribe(
                response => {
                  console.log('Files uploaded successfully:', response);
                },
                error => {
                  console.error('Error uploading files:', error);
                }
              );
            }else{
            this.packService.uploadFiles3(formData).subscribe(
              response => {
                console.log('Files uploaded successfully:', response);
              },
              error => {
                console.error('Error uploading files:', error);
              }
            );}
          }
          Cancel(): void {
            this.packForm.reset();}
            

}

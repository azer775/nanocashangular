import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/services/transaction.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


export enum StatusTr {
  APPROUVE = 'APPROUVE',
  REJETE = 'REJETE',
  EN_ATTENTE = 'EN_ATTENTE',
  EFFECTUE = 'EFFECTUE'
}
@Component({
  selector: 'app-add-trans',
  templateUrl: './add-trans.component.html',
  
  styleUrls: ['./add-trans.component.css']
})
export class AddTransComponent implements OnInit {
  selectedFile: File | null = null;
  transForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private transactionService: TransactionService,private snackBar: MatSnackBar,private router: Router) {
   
  }
  ngOnInit(): void {
    this.transForm = this.formBuilder.group({
      methode: ['', Validators.required],
      dateTrans: ['', [Validators.required, this.dateNotPastValidator]], // Apply the custom validator here
      rib_S: ['', [Validators.required, this.ribLengthValidator]],      
      rib_R: [{value: '14510277', disabled: true}, [Validators.required, this.ribLengthValidator]], 
      montant: ['', Validators.required],
      statusTr: [{ value: StatusTr.EN_ATTENTE, disabled: true }] 
    });
  }
  ribLengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || value.toString().length !== 8) {
      return { 'ribLength': true }; // Return an error if the length is not exactly 8
    }
    return null;
  }
  dateNotPastValidator(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date(); // Retain the current time
    
    const inputDate = new Date(control.value);
    // When control.value includes time (e.g., 2021-07-01T14:00), it is directly comparable
    // When it does not include time (e.g., 2021-07-01), it defaults to 00:00 of that day
    
    if (inputDate > currentDate) {
      return { 'dateNotPast': true }; // Return an error if the date and time are in the future
    }
    return null;
  }
  addTrans(): void {
    if (this.transForm.valid) {
      let transData = this.transForm.getRawValue(); // Use getRawValue() to include disabled fields
      transData.rib_R = '14510277'; // Ensure backend receives the correct rib_R value
  
      console.log('Submitting transaction data:', transData); // Check the data being sent
      this.transactionService.addTrans(transData).subscribe(
        response => {
          console.log('Transaction is made with success:', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('ERROR:', error);
        }
      );
    } else {
      console.error('Form invalid');
    }
  }
  addTransFromExcel() {
     if (this.selectedFile) {
       const formData = new FormData();
       formData.append('file', this.selectedFile, this.selectedFile.name);

      this.transactionService.genererTableauTransactions().subscribe(
         response => {
           console.log('Transactions added from Excel with success:', response);
           this.snackBar.open('Transactions added by Excel with success', 'Close', {
             duration: 10000, // Duration of the notification in milliseconds
             verticalPosition: 'top' // Position of the notification on the screen
           });
           this.router.navigate(['/trans']);
         },
         error => {
           console.error('ERROR:', error);
         }
       );
     } else {
       console.error('No file selected');
     }
   }
    onFileSelected(event: Event) {
     const file = (event.target as HTMLInputElement).files![0];
     if (file) {
       this.selectedFile = file;
     }
   }

}

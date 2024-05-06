import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/services/transaction.service';
import { Transaction, methode, statusTr } from 'src/models/Transaction';

@Component({
  selector: 'app-edit-trans',
  templateUrl: './edit-trans.component.html',
  styleUrls: ['./edit-trans.component.css']
})
export class EditTransComponent implements OnInit {
  transForm!: FormGroup;
  trans: Transaction = {
    id_trans: 0, // Provide a default value or adjust the type if needed
    methode: methode.agence,
    dateTrans: new Date(),
    rib_S: 0,
    rib_R: 0,
    montant: 0,
    statusTr: statusTr.APPROUVE,

    
  };
  
  constructor(private t: TransactionService, private router:Router, private route: ActivatedRoute , private formBuilder: FormBuilder){
  
  }
  ngOnInit(): void {
    // Récupérer l'identifiant de l'offre depuis l'URL
    const transId = this.route.snapshot.params['id'];

    // Récupérer les informations de l'offre à partir du service
    this.t.getTransbyId(transId).subscribe(
      response => {
        this.trans = response; 
        this.initializeForm(); 
      },
      error => {
        console.error('ERROR :', error);
      }
    );
  }
  initializeForm(): void {

    this.transForm = this.formBuilder.group({
      methode: [this.trans.methode||'', Validators.required],
      dateTrans: [this.trans.dateTrans||'', Validators.required],
      rib_S: [this.trans.rib_S||'', Validators.required],
      rib_R: [this.trans.rib_R||'', Validators.required],
      montant: [this.trans.montant||'', Validators.required],
      statusTr: [this.trans.statusTr||'', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.transForm.valid) {
      const transData = this.transForm.value;
      transData.id_trans = this.trans.id_trans; 

      this.t.modifyTrans(transData).subscribe(
        response => {
          console.log('Transaction updated with success:', response);
          this.router.navigate(['/admin/showTransactions']); 
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

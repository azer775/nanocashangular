import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/models/Transaction';
import { TransactionService } from 'src/services/transaction.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-show-transactions',
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css'],

})
export class ShowTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  pagedTransactions: Transaction[] = []; // Add this line
  searchText: string = '';
  currentTransaction: Transaction | null = null;
  form: FormGroup; 
  

  // Inject TransactionService and Router in your component constructor
  constructor(private transactionService: TransactionService, private router: Router) {
    // Initialize form here
    this.form = new FormGroup({
      statusTr: new FormControl('APPROUVE')
    });
  }

  ngOnInit(): void {
     // Initialize the form here
     this.form = new FormGroup({
      statusTr: new FormControl('APPROUVE') // Make sure this matches your expected control names
  });
    
    this.loadTransactions();
  }

  loadTransactions() {
    // Fetch transactions from the service
    this.transactionService.findAllTransactions().subscribe(transactions => {
      this.transactions = transactions;
      // Update pagedTransactions when transactions change
      this.changePage(this.currentPage);
    });
  }

  deleteTrans(trans: Transaction) {
    if (trans.id_trans !== undefined) {
      this.transactionService.removeTrans(trans.id_trans).subscribe(
        () => {
          // Remove the transaction from the local array
          this.transactions = this.transactions.filter(i => i !== trans);
          // Navigate back to the same route to refresh the page
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/admin/showTransactions']);
          });
        },
        error => {
          console.error('Erreur lors de la suppression de la transaction :', error);
        }
      );
    } else {
      console.error("L'identifiant de la transaction est indéfini.");
    }
  }

  // Pagination logic
  currentPage: number = 1;
  itemsPerPage: number = 5;

  get pages(): number[] {
    const pageCount = Math.ceil(this.transactions.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  changePage(page: number) {
    const startIndex = (page - 1) * this.itemsPerPage;
    this.currentPage = page;
    this.pagedTransactions = this.transactions.slice(startIndex, startIndex + this.itemsPerPage);
  }
  approveTransaction(transaction: any) {
    transaction.statusTr = 'APPROUVE';
    this.transactionService.modifyTrans(transaction).subscribe(() => {
      this.loadTransactions();  // Reload data to update UI
    });
  }
  refundTransaction(transaction: any) {
    const statusControl = this.form.get('statusTr');
    if (statusControl) {
      statusControl.setValue('EFFECTUE');
      statusControl.disable();
      alert('Refund completed successfully');
      this.loadTransactions();
    } else {
      console.error('Form control statusTr is not initialized');
    }
  }
  promptDelete(transaction: any) {
    this.transactionService = transaction;
    ($('#confirmModal') as any).modal('show');  // Use jQuery to show the modal
  }

  confirmDelete(transaction: any) {
    this.transactionService.removeTrans(transaction.id_trans).subscribe(() => {
      ($('#confirmModal') as any).modal('hide');  // Hide modal on success
      this.loadTransactions();  // Reload the list
    }, error => {
      console.error('Deletion failed:', error);
    });
  }
  rejectTransaction(transaction: any) {
    transaction.statusTr = 'REJETE';
    this.transactionService.modifyTrans(transaction).subscribe(() => {
      this.loadTransactions();  // Reload data to update UI
    });
  }
  deleteRejectedTrans(transaction: any) {
    if (transaction.statusTr === 'REJETE') {
      this.transactionService.removeTrans(transaction.id_trans).subscribe(() => {
        this.router.navigate(['/admin/showTransactions']);
        this.loadTransactions();  // Reload data to ensure UI updates
      });
    }
  }
}

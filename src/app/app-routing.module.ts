import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HomeComponent } from './Front/home/home.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { ShowTransactionsComponent } from './Back/show-transactions/show-transactions.component';
import { AddTransComponent } from './Back/add-trans/add-trans.component';
import { EditTransComponent } from './Back/edit-trans/edit-trans.component';
import {DashboardComponent} from './Front/dashboard/dashboard.component';

const routes: Routes = [
  { path: "",
component: AllFrontComponent,
children:[
{
  path: "home",
 component: HomeComponent

},
{ path: "addTrans",
  component: AddTransComponent
},
{ path: 'dashboard', component: DashboardComponent }
]
},
{ path: "admin",
component: AllBackComponent,
children:[{
  path: "dashboard",
  component: HomebackComponent
},{
  path:"showTransactions",
  component:ShowTransactionsComponent
},
{
  path: "editTrans/:id",
  component: EditTransComponent
}
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

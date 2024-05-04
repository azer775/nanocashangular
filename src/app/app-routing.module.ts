import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HomeComponent } from './Front/home/home.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { PacksComponent } from './Back/packs/packs.component';
import { FormpackComponent } from './Back/formpack/formpack.component';
import { FormContractComponent } from './Back/formContract/formContract.component';
import { FormProjectComponent } from './Front/form-project/form-project.component';
import { ContractComponent } from './Back/contract/contract.component';
import { ProjectComponent } from './Front/project/project.component';
import { InvestmentComponent } from './Front/investisement/investisement.component';
import { ForminvestementComponent } from './Front/form-investement/form-investement.component';
import { EditContractComponent } from './Back/editFormContract/editContract.component';






const routes: Routes = [
  { path: "",
component: AllFrontComponent,
children:[
{
  path: "home",
 component: HomeComponent

},
{ path: "addProject",
component: FormProjectComponent,
},
{path: "addInvestment",
component: ForminvestementComponent,
},
{path: "project",
component: ProjectComponent,
},
{path: "investisement",
component: InvestmentComponent,
}
]
},
{ path: "admin",
component: AllBackComponent,
children:[
{
  path: "dashboard",
  component: HomebackComponent
},
{ path: "packs",
  component: PacksComponent
},
{ path: "addpack",
  component: FormpackComponent
},
{ path: "addcontract",
  component: FormContractComponent
},
{ path: "contract",
  component: ContractComponent,
},
{ path: "edit-contract/:id", component: EditContractComponent } 

]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

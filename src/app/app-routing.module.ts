import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HomeComponent } from './Front/home/home.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { PacksComponent } from './Back/packs/packs.component';
import { FormpackComponent } from './Back/formpack/formpack.component';

const routes: Routes = [
  { path: "",
component: AllFrontComponent,
children:[
{
  path: "home",
 component: HomeComponent

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
}
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

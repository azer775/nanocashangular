import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HomeComponent } from './Front/home/home.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { AddInsComponent } from './Components/add-ins/add-ins.component';
import { ShowInsComponent } from './Components/show-ins/show-ins.component';

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
children:[{
  path: "dashboard",
  component: HomebackComponent
},
{ path: "ins",
  component: ShowInsComponent
},
{ path: "addins",
  component: AddInsComponent
}]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

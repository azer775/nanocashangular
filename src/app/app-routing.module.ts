import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front/home/home.component';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { AllBackComponent } from './Back/all-back/all-back.component';

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
    component: AllBackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

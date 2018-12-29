import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersContainerComponent } from './pages/customers/customers-container.component';



const routes: Routes = [
  {path: '', component: CustomersContainerComponent
  //,canActivate: [ CustomersGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'listing',
        component: ListingComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: '**',
        component: RegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

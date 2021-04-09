import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { TourInformationComponent } from './pages/tour-information/tour-information.component';

const routes: Routes = [{ path: '', component: MainLandingComponent },
{path:'tours/:id',component:TourInformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

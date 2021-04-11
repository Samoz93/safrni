import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { TourInformationComponent } from './pages/tour-information/tour-information.component';

const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'tours/:id', component: TourInformationComponent },
  { path: 'offers', component: OffersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

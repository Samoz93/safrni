import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { LoginComponent } from './pages/user/login/login.component';
import { UserProfileLandingComponent } from './pages/user/user-profile-landing/user-profile-landing.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { BookingPageComponent } from './pages/booking/booking-page.component';
import { TourInformationComponent } from './pages/tour-information/tour-information.component';

const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: UserProfileLandingComponent,
  },
  { path: 'offers', component: OffersPageComponent },
  { path: 'booking/:id', component: BookingPageComponent },
  {
    path: 'tours/:id',
    component: TourInformationComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

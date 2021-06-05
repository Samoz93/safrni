import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { LoginComponent } from './pages/user/login/login.component';
import { UserProfileLandingComponent } from './pages/user/user-profile-landing/user-profile-landing.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { BookingPageComponent } from './pages/booking/booking-page.component';
import { TourInformationComponent } from './pages/tour-information/tour-information.component';
import { TourMapComponent } from './pages/tour-information/tour-map/tour-map.component';
import { TourInformationResolver } from './data/resolvers/tour-information.resolver';
import { MapResolver } from './data/resolvers/map.resolver';
import { HomeLandingResolver } from './data/resolvers/home-landing.resolver';
import { OffersPageResolver } from './data/resolvers/offers-page.resolver';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { ManageBookingComponent } from './pages/manage-booking/manage-booking.component';
import { ManageBookingResolver } from './data/resolvers/manage-booking.resolver';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [
  {
    path: '',
    component: MainLandingComponent,
    resolve: { initData: HomeLandingResolver },
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: UserProfileLandingComponent,
  },
  {
    path: `offers`,
    component: OffersPageComponent,
    resolve: { trips: OffersPageResolver },
  },
  { path: 'booking/:id', component: BookingPageComponent },
  {
    path: 'tours/:id',
    component: TourInformationComponent,
    resolve: { dataMap: TourInformationResolver },
  },
  {
    path: 'map/:id',
    component: TourMapComponent,
    resolve: {
      mapTripData: MapResolver,
    },
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
  {
    path: 'manage-booking',
    component: ManageBookingComponent,
    resolve: {
      manageBookingData: ManageBookingResolver,
    },
  },
  {
    path: '404',
    component: E404Component,
  },
  { path: '**', component: E404Component },
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

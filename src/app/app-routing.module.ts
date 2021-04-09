import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { LoginComponent } from './pages/user/login/login.component';
import { UserProfileLandingComponent } from './pages/user/user-profile-landing/user-profile-landing.component';

const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'login', component: LoginComponent},
  {
    path: 'profile',
    component: UserProfileLandingComponent,
    // children: [
    //   { path: 'info', component: UserProfileComponent },
    //   { path: 'trips', component: UserTripsComponent },
    //   { path: 'security', component: UserSecurityComponent },
    // ],
  },
  {path:'tours/:id',component:TourInformationComponent}
];
import { TourInformationComponent } from './pages/tour-information/tour-information.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

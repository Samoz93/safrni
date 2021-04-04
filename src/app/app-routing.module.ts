import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { LoginComponent } from './pages/user/login/login.component';
import { UserProfileComponent } from './pages/user/user-profile-landing/tabs/user-profile/user-profile.component';
import { UserSecurityComponent } from './pages/user/user-profile-landing/tabs/user-security/user-security.component';
import { UserTripsComponent } from './pages/user/user-profile-landing/tabs/user-trips/user-trips.component';
import { UserProfileLandingComponent } from './pages/user/user-profile-landing/user-profile-landing.component';

const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: UserProfileLandingComponent,
    // children: [
    //   { path: 'info', component: UserProfileComponent },
    //   { path: 'trips', component: UserTripsComponent },
    //   { path: 'security', component: UserSecurityComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

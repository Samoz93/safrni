import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { SearchPanelComponent } from './pages/main-landing/search-panel/search-panel.component';
import { SectionHeaderComponent } from './pages/main-landing/section-header/section-header.component';
import { SectionOffersComponent } from './pages/main-landing/section-offers/section-offers.component';
import { SectionCitiesComponent } from './pages/main-landing/section-cities/section-cities.component';
import { SectionDailyTripsComponent } from './pages/main-landing/section-daily-trips/section-daily-trips.component';
import { FooterComponent } from './common/layout/footer/footer.component';
import { HeaderInfoComponent } from './common/layout/header-info/header-info.component';
import { HeaderToolBarComponent } from './common/layout/header-tool-bar/header-tool-bar.component';
import { OfferLandingComponent } from './pages/Offer/offer-landing/offer-landing.component';
import { OfferInfoLandingComponent } from './pages/Offer/offer-info-landing/offer-info-landing.component';
import { OfferInformationComponent } from './pages/Offer/offer-info-landing/offer-information/offer-information.component';
import { OfferPlanComponent } from './pages/Offer/offer-info-landing/offer-plan/offer-plan.component';
import { OfferLocationComponent } from './pages/Offer/offer-info-landing/offer-location/offer-location.component';
import { LoginComponent } from './pages/user/login/login.component';
import { OfferBookingComponent } from './pages/Offer/offer-booking/offer-booking.component';
import { SingleTripCardComponent } from './common/widgets/single-trip-card/single-trip-card.component';
import { TripExtraComponent } from './common/widgets/trip-extra/trip-extra.component';
import { HeaderIconComponent } from './common/widgets/header-icon/header-icon.component';
import { OursocialmediaComponent } from './common/widgets/oursocialmedia/oursocialmedia.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserProfileLandingComponent } from './pages/user/user-profile-landing/user-profile-landing.component';
import { UserProfileComponent } from './pages/user/user-profile-landing/tabs/user-profile/user-profile.component';
import { UserTripsComponent } from './pages/user/user-profile-landing/tabs/user-trips/user-trips.component';
import { UserSecurityComponent } from './pages/user/user-profile-landing/tabs/user-security/user-security.component';
import { ProfileinputComponent } from './common/widgets/profileinput/profileinput.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    SearchPanelComponent,
    SectionHeaderComponent,
    SectionOffersComponent,
    SectionCitiesComponent,
    SectionDailyTripsComponent,
    FooterComponent,
    HeaderInfoComponent,
    HeaderToolBarComponent,
    OfferLandingComponent,
    OfferInfoLandingComponent,
    OfferInformationComponent,
    OfferPlanComponent,
    OfferLocationComponent,
    LoginComponent,
    OfferBookingComponent,
    SingleTripCardComponent,
    TripExtraComponent,
    HeaderIconComponent,
    OursocialmediaComponent,
    UserProfileLandingComponent,
    UserProfileComponent,
    UserTripsComponent,
    UserSecurityComponent,
    ProfileinputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

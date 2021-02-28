import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { SearchPanelComponent } from './main-landing/search-panel/search-panel.component';
import { SectionHeaderComponent } from './main-landing/section-header/section-header.component';
import { SectionOffersComponent } from './main-landing/section-offers/section-offers.component';
import { SectionCitiesComponent } from './main-landing/section-cities/section-cities.component';
import { SectionDailyTripsComponent } from './main-landing/section-daily-trips/section-daily-trips.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderInfoComponent } from './layout/header-info/header-info.component';
import { HeaderToolBarComponent } from './layout/header-tool-bar/header-tool-bar.component';
import { OfferLandingComponent } from './Offer/offer-landing/offer-landing.component';
import { OfferInfoLandingComponent } from './Offer/offer-info-landing/offer-info-landing.component';
import { OfferInformationComponent } from './Offer/offer-info-landing/offer-information/offer-information.component';
import { OfferPlanComponent } from './Offer/offer-info-landing/offer-plan/offer-plan.component';
import { OfferLocationComponent } from './Offer/offer-info-landing/offer-location/offer-location.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { OfferBookingComponent } from './Offer/offer-booking/offer-booking.component';

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
    SignupComponent,
    OfferBookingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

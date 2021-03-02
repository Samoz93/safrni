import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { SignupComponent } from './pages/user/signup/signup.component';
import { OfferBookingComponent } from './pages/Offer/offer-booking/offer-booking.component';

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

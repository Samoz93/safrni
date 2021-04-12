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
import { SingleTripCardComponent } from './common/widgets/single-trip-card/single-trip-card.component';
import { TripExtraComponent } from './common/widgets/trip-extra/trip-extra.component';
import { HeaderIconComponent } from './common/widgets/header-icon/header-icon.component';
import { OursocialmediaComponent } from './common/widgets/oursocialmedia/oursocialmedia.component';
import { TourInformationComponent } from './pages/tour-information/tour-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoInformationTabComponent } from './pages/tour-information/info-information-tab/info-information-tab.component';
import { InfoPlanTabComponent } from './pages/tour-information/info-plan-tab/info-plan-tab.component';
import { InfoLocationTabComponent } from './pages/tour-information/info-location-tab/info-location-tab.component';
import { InfoReviewsTabComponent } from './pages/tour-information/info-reviews-tab/info-reviews-tab.component';
import { ReadOnlyStarsComponent } from './common/widgets/read-only-stars/read-only-stars.component';
import { StepperComponent } from './common/widgets/stepper/stepper.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';

import { OffersFilterComponent } from './pages/offers-page/offers-filter/offers-filter.component';

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
    SingleTripCardComponent,
    TripExtraComponent,
    HeaderIconComponent,
    OursocialmediaComponent,
    TourInformationComponent,
    InfoInformationTabComponent,
    InfoPlanTabComponent,
    InfoLocationTabComponent,
    InfoReviewsTabComponent,
    ReadOnlyStarsComponent,
    StepperComponent,
    OffersPageComponent,
    
    OffersFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

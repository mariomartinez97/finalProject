import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth.component';
import { SecurityFinderComponent } from './components/security-finder.component';
import { ChartComponent } from './components/chart.component';
import { SecuritiesComponent } from './components/securities.component';
import { SecurityFilterPipe } from './pipes/security-filter.pipe';
import { HistoricalPricesComponent } from './components/historical-prices.component';
import { PortfolioComponent } from './components/portfolio.component';
import { SecurityDetailComponent } from './components/security-detail.component';
import { AboutComponent } from './components/about.component';
import { LandingPageComponent } from './components/landing-page.component';
import { AuthGuardComponent } from './components/authguard.component';

import { AuthService } from './services/auth.service';
import { SecuritiesService } from './services/securities.service';
import { SecuritySearchService } from './services/security-search.service';
import { HistoricalPricesService } from './services/historical-prices.service';
import { PortfoliosService } from './services/portfolios.service';

import 'hammerjs';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SecurityFinderComponent,
    ChartComponent,
    SecuritiesComponent,
    SecurityFilterPipe,
    HistoricalPricesComponent,
    PortfolioComponent,
    SecurityDetailComponent,
    AboutComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    SecuritiesService,
    SecuritySearchService,
    HistoricalPricesService,
    PortfoliosService,
    AuthGuardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

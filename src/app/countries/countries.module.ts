import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NgModule} from '@angular/core';


import {CountryTableComponent} from './components/country-table/country-table.component';
import {ByCapitalPageComponent} from './pages/by-capital-page/by-capital-page.component';
import {ByCountryPageComponent} from './pages/by-country-page/by-country-page.component';
import {ByRegionPageComponent} from './pages/by-region-page/by-region-page.component';
import {CountriesRoutingModule} from "./countries-routing/countries-routing.module";
import {CountryPageComponent} from './pages/country-page/country-page.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [

    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [

    CommonModule,
    CountriesRoutingModule,
    NgOptimizedImage,
    SharedModule,
  ]
})
export class CountriesModule {
}

import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countriesComponent:CountryInterface[]=[];
  public ifLoading = false;
  public initialValue:string='';


  constructor(private countriesService:CountriesService) {

  }

  ngOnInit(): void {
        this.countriesComponent = this.countriesService.cacheStore.byCountries.countries;
        this.initialValue=this.countriesService.cacheStore.byCountries.term;
    }

  searchByCountry(value:string):void{
    this.ifLoading=true;
    this.countriesService.searchCountry(value).subscribe(
      resp =>{
        this.countriesComponent = resp;
        this.ifLoading=false;
      }
    )

  }

}

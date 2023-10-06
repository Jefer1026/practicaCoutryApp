import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";

@Component({
  selector: 'countries-by-capita-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements  OnInit{

  public countries:CountryInterface[]=[];
  public isLoading:boolean=false;
  public initialValue:string='';

  constructor(private countriesService:CountriesService) {
  }
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
  }

searchByCapital(value:string):void{
    this.isLoading=true;

  this.countriesService.searchCapital(value).subscribe(
    resp=>{
      this.countries=resp;
      this.isLoading=false;
    });

}





}

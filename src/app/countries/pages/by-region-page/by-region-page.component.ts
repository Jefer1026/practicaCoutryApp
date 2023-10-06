import {Component, OnInit} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/region.type";

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent implements OnInit{
  public regionCountry: CountryInterface[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countryService: CountriesService) {
  }

  ngOnInit(): void {
        this.regionCountry = this.countryService.cacheStore.byRegion.countries;
        this.selectedRegion= this.countryService.cacheStore.byRegion.region;
    }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countryService.searchRegion(region).subscribe(
      resp => {
        this.regionCountry = resp
      }
    )
  }

}

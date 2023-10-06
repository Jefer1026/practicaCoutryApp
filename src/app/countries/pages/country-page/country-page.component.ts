import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../../services/countries.service";
import {switchMap} from "rxjs";
import {CountryInterface} from "../../interfaces/country.interface";

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent implements OnInit {

  public country?: CountryInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countryService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl('')
        }
        return this.country = country;

      });


  }

}

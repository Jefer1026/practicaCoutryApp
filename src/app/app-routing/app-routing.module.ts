import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutPageComponent} from "../shared/pages/about-page/about-page.component";
import {ContactPageComponent} from "../shared/pages/contac-page/contact-page.component";
import {HomePageComponent} from "../shared/pages/home-page/home-page.component";


const routes: Routes = [
/*   {
      path: '',
      component: HomePageComponent
    },*/
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },{
    path:'countries',
    loadChildren: () => import('../countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

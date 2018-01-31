import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'services', component: ServicesComponent},
        {path: 'portfolio', component: PortfolioComponent},
        {path: 'contact', component: ContactComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
      ]
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

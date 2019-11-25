import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppreilComponent } from './appreil/appreil.component';
import { AppareilService } from '../services/appareil.service';
import { AuthServiceService } from '../services/auth-service.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponentComponent } from './single-appareil-component/single-appareil-component.component';

const appRoutes: Routes = [
  {path: 'appareils', component: AppareilViewComponent},
  {path: 'appareils/:id', component: SingleAppareilComponentComponent },
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppreilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

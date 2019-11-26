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
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from '../services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponentComponent },
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppreilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponentComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthServiceService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

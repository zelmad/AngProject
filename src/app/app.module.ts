import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppreilComponent } from './appreil/appreil.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppreilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

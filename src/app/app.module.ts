import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
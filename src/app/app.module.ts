import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCalculatorComponent } from './Components/basic-calculator/basic-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BasicCalculatorComponent]
})
export class AppModule { }

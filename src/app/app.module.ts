import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { CalculoService } from './multiplicar/multiplicar.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MultiplicarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CalculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

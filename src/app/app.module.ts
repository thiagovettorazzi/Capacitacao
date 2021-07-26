import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoupaComponent } from './roupa/roupa.component';
import { RoupasListaComponent } from './roupas-lista/roupas-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    RoupaComponent,
    RoupasListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProduitListeComponent } from './composants/produit-liste/produit-liste.component';
import { RechercheProduitComponent } from './composants/recherche-produit/recherche-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitListeComponent,
    RechercheProduitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

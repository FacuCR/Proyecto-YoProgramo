import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ===== Angular Material ===== //
import { MaterialModule } from './material.module';

// ===== ngx-typed.js ===== //
import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { AboutComponent } from './Components/about/about.component';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginBtnComponent } from './Components/loginBtn/loginBtn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HabilidadesComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent,
    LoginBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

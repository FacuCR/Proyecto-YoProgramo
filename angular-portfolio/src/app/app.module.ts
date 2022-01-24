import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ===== Angular Material ===== //
import { MaterialModule } from './material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
import { FormularioLoginComponent } from './Components/formulario-login/formulario-login.component';

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
    LoginBtnComponent,
    FormularioLoginComponent
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
  providers: [
    { provide:MatDialogRef , useValue:{} },
    { provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }

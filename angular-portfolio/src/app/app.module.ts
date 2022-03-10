import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// ===== Angular Material ===== //
import { MaterialModule } from './material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// ===== ngx-typed.js ===== //
import {NgxTypedJsModule} from 'ngx-typed-js';

import { AuthInterceptorProviders } from './helpers/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './Components/about/about.component';
import { AppComponent } from './app.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormularioLoginComponent } from './Components/formulario-login/formulario-login.component';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { LoginBtnComponent } from './Components/loginBtn/loginBtn.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { EditarBtnComponent } from './Components/editar-btn/editar-btn.component';
import { BorrarBtnComponent } from './Components/borrar-btn/borrar-btn.component';
import { EditarHeroComponent } from './Components/editar-hero/editar-hero.component';
import { InicialesPipe } from './pipes/iniciales.pipe';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactoComponent,
    FooterComponent,
    FormularioLoginComponent,
    HabilidadesComponent,
    HeaderComponent,
    HeroComponent,
    LoginBtnComponent,
    PortfolioComponent,
    EditarBtnComponent,
    BorrarBtnComponent,
    EditarHeroComponent,
    InicialesPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide:MatDialogRef , useValue:{} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    [ AuthInterceptorProviders ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// ===== Angular Material ===== //
import { MaterialModule } from './material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// ===== ngx-typed.js ===== //
import { NgxTypedJsModule } from 'ngx-typed-js';

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
import { EditarImgBtnComponent } from './Components/editar-img-btn/editar-img-btn.component';
import { EditarBgComponent } from './Components/editar-bg/editar-bg.component';
import { DndDirective } from './directives/dnd.directive';
import { AddBtnComponent } from './Components/add-btn/add-btn.component';
import { AddRedSocialComponent } from './Components/add-red-social/add-red-social.component';
import { EditarRedSocialComponent } from './Components/editar-red-social/editar-red-social.component';
import { EditarAboutComponent } from './Components/editar-about/editar-about.component';
import { EditarFotoPerfilComponent } from './Components/editar-foto-perfil/editar-foto-perfil.component';
import { SubirCvComponent } from './Components/subir-cv/subir-cv.component';
import { SubirCvBtnComponent } from './Components/subir-cv-btn/subir-cv-btn.component';
import { AddHabilidadComponent } from './Components/add-habilidad/add-habilidad.component';
import { BorrarHabilidadComponent } from './Components/borrar-habilidad/borrar-habilidad.component';
import { EditarHabilidadComponent } from './Components/editar-habilidad/editar-habilidad.component';
import { AddProyectoComponent } from './Components/add-proyecto/add-proyecto.component';
import { EditarProyectoComponent } from './Components/editar-proyecto/editar-proyecto.component';
import { BorrarProyectoComponent } from './Components/borrar-proyecto/borrar-proyecto.component';
import { EditarImagenProyectoComponent } from './Components/editar-imagen-proyecto/editar-imagen-proyecto.component';

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
    EditarImgBtnComponent,
    EditarBgComponent,
    DndDirective,
    AddBtnComponent,
    AddRedSocialComponent,
    EditarRedSocialComponent,
    EditarAboutComponent,
    EditarFotoPerfilComponent,
    SubirCvComponent,
    SubirCvBtnComponent,
    AddHabilidadComponent,
    BorrarHabilidadComponent,
    EditarHabilidadComponent,
    AddProyectoComponent,
    EditarProyectoComponent,
    BorrarProyectoComponent,
    EditarImagenProyectoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    [AuthInterceptorProviders],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

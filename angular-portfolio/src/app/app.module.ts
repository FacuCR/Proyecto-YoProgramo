import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ===== Angular Material ===== //
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


// ===== ngx-typed.js ===== //
import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { AboutComponent } from './Components/about/about.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HabilidadesComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NoopAnimationsModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

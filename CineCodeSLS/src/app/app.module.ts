import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/DashBoard/dashboard.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CartazComponent } from './pages/em-cartaz/cartaz.component';
import { BreveComponent } from './pages/em-breve/breve.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FilmeDetailComponent } from './shared/components/filme-detail/filme-detail.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    FooterComponent,
    CartazComponent,
    BreveComponent,
    NavComponent,
    FilmeDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

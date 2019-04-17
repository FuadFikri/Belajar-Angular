import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RekeningComponent } from './rekening/rekening.component';
import { TransferComponent } from './transfer/transfer.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { RekeningModule } from './rekening/rekening.module'; //yang diimport modulenya bukan compoenntnya

const routingAplikasi: Routes = [
  { path: 'rekening', redirectTo: '/rekening', pathMatch:'full' },
  { path: 'transfer', component: TransferComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    NavbarComponent,
    WelcomeComponent,
    RekeningComponent,
    TransferComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routingAplikasi),
    RekeningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

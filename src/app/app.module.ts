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
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TransferModule } from './transfer/transfer.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './ceklogin-service';
import { ProgressIndicatorService } from './progress-indicator.service';
import { AuthService } from './auth.service';

const routingAplikasi: Routes = [
  { path: 'rekening', redirectTo: '/rekening', pathMatch:'full', canActivate:[AuthGuard]  },
  { path: 'transfer', redirectTo: '/transfer', pathMatch: 'full', canActivate:[AuthGuard]  },
  { path: 'profile', component: ProfileComponent, pathMatch:'full', canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
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
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routingAplikasi),
    RekeningModule,
    TransferModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [AuthGuard, ProgressIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTransferComponent } from './input-transfer/input-transfer.component';
import { KonfirmasiTransferComponent } from './konfirmasi-transfer/konfirmasi-transfer.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RekeningModule } from '../rekening/rekening.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../ceklogin-service';

const routingTransfer: Routes = [
  {path: 'transfer/konfirmasi', component: KonfirmasiTransferComponent, canActivate:[AuthGuard]},
  {path: 'transfer/input', component: InputTransferComponent,  canActivate:[AuthGuard]}
];
@NgModule({
  declarations: [InputTransferComponent, KonfirmasiTransferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routingTransfer),
    MDBBootstrapModule.forRoot(),
    RekeningModule,
    FormsModule //untuk ngModel
  ],
  providers:[AuthGuard]
})
export class TransferModule { }

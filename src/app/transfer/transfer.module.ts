import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTransferComponent } from './input-transfer/input-transfer.component';
import { KonfirmasiTransferComponent } from './konfirmasi-transfer/konfirmasi-transfer.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RekeningModule } from '../rekening/rekening.module';

const routingTransfer: Routes = [
  {path: 'transfer/konfirmasi', component: KonfirmasiTransferComponent},
  {path: 'transfer/input', component: InputTransferComponent}
];
@NgModule({
  declarations: [InputTransferComponent, KonfirmasiTransferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routingTransfer),
    MDBBootstrapModule.forRoot(),
    RekeningModule
  ]
})
export class TransferModule { }

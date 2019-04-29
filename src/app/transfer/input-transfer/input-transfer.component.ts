import { Component, OnInit } from '@angular/core';
import { Transfer } from '../transfer.model';
import { TransferService } from '../transfer.service';
import { Router } from '@angular/router';
import { ProgressIndicatorService } from 'src/app/progress-indicator.service';

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.scss'],
  providers:[TransferService]
})
export class InputTransferComponent implements OnInit {

  transfer = new Transfer(undefined, undefined, 0, '');

  constructor(private transferService: TransferService, private router: Router, private progress: ProgressIndicatorService) { }

  ngOnInit() {
  }

  lakukanTransfer():void{
    this.progress.toggleIndicator("Memproses Transfer");
    this.transferService.simpan(this.transfer).subscribe(res => {
      this.progress.toggleIndicator(null);
      console.log(res);
    });
    this.router.navigate(['transfer/konfirmasi']);

  }

  get debugForm(){
    return JSON.stringify(this.transfer);
}

}

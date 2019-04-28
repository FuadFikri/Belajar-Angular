import { Component, OnInit } from '@angular/core';
import { Transfer } from '../transfer.model';

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.scss']
})
export class InputTransferComponent implements OnInit {

  transfer = new Transfer(undefined, undefined, 0, '');

  constructor() { }

  ngOnInit() {
  }

  get debugForm(){
    return JSON.stringify(this.transfer);
}

}

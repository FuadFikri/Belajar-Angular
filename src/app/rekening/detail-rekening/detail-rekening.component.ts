import { Component, OnInit, Input } from '@angular/core';
import { Rekening } from '../rekening.model';

@Component({
  selector: 'detail-rekening',
  templateUrl: './detail-rekening.component.html',
  styleUrls: ['./detail-rekening.component.scss']
})
export class DetailRekeningComponent implements OnInit {
  @Input() rekeningDipilih:Rekening;
  constructor() { }

  ngOnInit() {
  }

}

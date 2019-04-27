import {
  Component,
  OnInit
}

from '@angular/core';

import {
  RekeningService
}

from '../rekening.service';

import {
  Rekening
}

from '../rekening.model';

@Component({
    selector: 'app-daftar-rekening',
    templateUrl: './daftar-rekening.component.html',
    styleUrls: ['./daftar-rekening.component.scss'],
    providers: [RekeningService]
  }

) export class DaftarRekeningComponent implements OnInit {
  headElements = ["id",
    "nama",
    "action"
  ];
  daftarRekening: Rekening[];
  errorMsg:String;

  constructor(private rekeningService: RekeningService) {
    this.rekeningService.getDataRekening().subscribe((data: Rekening[]) => {
        this.daftarRekening = data
      },
      error => {
        this.errorMsg=error.statusText;
      }
    );


  }

  ngOnInit() {
  }

  showDetail(rek: Rekening) {
    console.log(rek);
  }

}

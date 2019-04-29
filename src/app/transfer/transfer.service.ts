import { Injectable } from '@angular/core';
import { Transfer } from './transfer.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TransferService {

  private serverURL= 'api/transfer/';
  constructor(private http: HttpClient) { }

  simpan(t: Transfer): any{
    return this.http.post(this.serverURL, t);
  }
}

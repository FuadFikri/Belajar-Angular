import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProgressIndicatorService {

  private status = new Subject<any>();

  getStatus() : Observable<any> {
    return this.status.asObservable();
  }

  toggleIndicator(data : any){
    this.status.next(data);
  }

  constructor() { }

}
